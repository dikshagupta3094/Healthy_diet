
const user_model = require('../models/user.model.js')
const CustomError = require('../utilis/customError.utilis.js')
const sendEmail = require('../utilis/sendEmail.utilis.js')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { AsyncResource } = require('async_hooks')

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

      const user = await user_model.create({
         name,
         username,
         email,
         password,
         role, 
      })
      if(!user){
         return next(new CustomError('User registration failed',500))
      }
      await user.save();
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

exports.contact =async(req,res,next)=>{
   const{name,email,phone,subject,message} = req.body
 
  try {
   const user = await user_model.find({email})
   if(!user){
      return next(CustomError('Please register first',400))
   }
}catch (error) {
   console.log(error);
       res.status(500).json({
         success:false,
         message:"Some internall error occured"
       })
}
   const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact Form Message from ${name}`,
      text: message,
   };
   
       try {
      await transporter.sendMail(mailOptions);
      res.json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email.' });
    }
   
}