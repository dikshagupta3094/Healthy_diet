
const user_model = require('../models/user.model.js')
const CustomError = require('../utilis/customError.utilis.js')
const sendEmail = require('../utilis/sendEmail.utilis.js')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//FORNTEND URL
const BASE_URL = process.env.BASE_URL

exports.register = async(req,res,next)=>{
   try {
   const {name,username,email,password,role} = req.body
      if(!name||!username||!email||!password){
         return next(new CustomError('All fields are required',400))
      }
      const userExist = await user_model.findOne({email})

      if(userExist){
         return next(new CustomError('Account already created with associated data',400))
      }
      const usernameImput = await user_model.findOne({username})
      if(usernameImput){
         return next(new CustomError('Already occupied username, please chosse another username',400))
      }
      const user = await user_model.create({
         name,
         username,
         email,
         password,
         role, 
         emailToken:crypto.randomBytes(64).toString('hex')
      })
      // console.log("Email Token", emailToken);

      if(!user){
         return next(new CustomError('User registration failed',500))
      }
      
      await user.save();
      
      //Sent email for verification
   //    const verificationURL = `${BASE_URL}/emailVerification/${user.emailToken}`
   //    // console.log("verification URL LINK:",verificationURL);
   //    const message = `Hey ${user.name} Thank you for registerning. please click below link to verify your email \n\n${verificationURL}\n\n This link valid only for 2 minutes.`
   //    console.log("Message:",message);
   //   await sendEmail({
   //       email:user.email,
   //       subject:'Email verification link',
   //       message
   //    })
      res.status(201).json({
         success:true,
         message:"User registerd successfully",
         user
      })
   } 
   catch (error) {
      console.log(error);
     res.status(500).json({
        success:false,
        msg:"Some internall error occurered"
     })
     
   }
}
exports.verifyEmail = async(req,res,next)=>{
   const emailToken = req.body.emailToken
   if(!emailToken){
      return next(CustomError('Email Token not found',400))
   }
   try {
      const user = await user_model.findOne({emailToken})
   if(user){
      user.emailToken = null
      user.isVerified = true
   
   await user.save()
   const token = jwt.sign(user._id, process.env.SECRET,{expiresIn:Date.now()+ 2*60*1000})
   res.status(200).json({
      success:true,
      _id: user._id,
      name:user.name,
      username:user.username,
      email:user.email,
      password:user.password,
      role:user.role, 
      token,
      isVerified:user?.isVerified

   })}
   else{
      res.status(404).json({
         success:false,
         message:"Email verification failed"
      })
   }
   }catch (error) {
      console.log(error);
      res.status(500).json({
         success:false,
         mesaage:"Some internal error occured"
      })
   }
}
exports.login = async(req,res,next)=>{
   try {
      const {email,password} = req.body
       const user = await user_model.findOne({email})
      if(!user || !user.comparedPassword(password)){
         return next(new CustomError("Email and password does not match",400))
      }
      const token = user.jsonwebtoken()
      console.log("Token Generated",token);
       user.password = undefined
      res.status(200).json({
         success:true,
         msg:"LogIn successfully",
         data:user,
         token:token
      })
   }

   catch (error) {
      console.log(error);
     return next(new CustomError("Error while login",401))
   }
}

exports.forgotPassword = async(req,res,next)=>{
   const {email} = req.body
   if(!email){
      return next(new CustomError('Email is required',400))
   }
   const user = await user_model.findOne({email})
  if(!user){
    return next(new CustomError('We do not any user with given email!! Email not found',400))
  }
  //SAVE THE RANDOM TOKEN
  const resetToken= await user.generatePasswordResetToken()
  await user.save()
  console.log("Reset token:", resetToken);
  //SEND THE TOKEN BACK TO THE USER EMAIL
   console.log("BASE URL", BASE_URL);
   const resetURL = `${BASE_URL}/resetPassword/${resetToken}`
  console.log("Reset URL LINK:",resetURL);
  const message = `we have recived reset password request. please use below link to reset your password\n\n${resetURL}\n\n This link valid only for 2 minutes.`
  console.log("Message:",message);
    try {
      await sendEmail({
         email:user.email,
         subject:'Password change request recived',
         message
        })
        
        res.status(200).json({
         success:true,
         message:'Password reset link send to user email address'
        })
    } catch (error) {
      user.forgotPasswordToken = undefined,
      user.forgotPasswordExpiry = undefined,
      await user.save({validateBeforeSave:false})
          console.log(error);
      return next(new CustomError('There was an error for sending reset password link! PLEASE TRY AGAIN',500))
    }
};

exports.resetPassword = async(req,res,next)=>{
     try {
      const {resetToken} = req.params;
      const {password} = req.body;
      const forgotPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

      const user = await user_model.findOne({
         forgotPasswordToken,
         forgotPasswordExpiry :{$gt:Date.now()}
      })

      if(!user){
         return next(new CustomError('Token is invalid, or expired'),400)
      }

      user.password =await bcrypt.hash(password,10)
      user.forgotPasswordToken = undefined
      user.forgotPasswordExpiry = undefined
      user.passwordChangeAt = Date.now()
      user.save()
      console.log(user);
      res.status(200).json({
         success:true,
         message:'Password reset successfully',
      })
     } catch (error) {
      console.log(error);
       res.status(500).json({
         success:false,
         message:"Some internall error occured"
       })
     }
}  

exports.getDietExpertId = async(req,res,next)=>{
    try {
      const dietExpert = await user_model.find({role:'Diet expert'})
      const dietExpertId = dietExpert.map(user => user._id)
      res.status(200).json({
         success:true,
         message:"Expert Id",
         UsersId:dietExpertId,
         data:dietExpert
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
         success:false,
         message:"Some internall error occured"
      })
    }
}

exports.getAllUser = async(req,res,next)=>{
   const keyword = req.query
   console.log(keyword);
   const users = await user_model.find(keyword).find({_id:{$ne:req.user._id}})
   res.status(200).send(users)
}