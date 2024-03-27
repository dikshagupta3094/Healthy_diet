
const user_model = require('../models/user.model.js')
const bcrypt = require('bcrypt')
const CustomError = require('../utilis/customError.utilis.js')


exports.register = async(req,res,next)=>{
   try {
   const {name,username,email,password,confirmPassword,mobile_no,gender,role} = req.body
      if(!name||!username||!email||!password||!mobile_no||!gender){
         return next(new CustomError('All fields are required',400))
      }
      
      if(password != confirmPassword){
         return next(new CustomError('Password do not match',400))
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
         mobile_no,
         gender,
         role
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

const cookieOption ={
   maxAge:24*60*60*1000,
   httpOnly:true
} 
exports.login = async(req,res,next)=>{
   try {
      const {email,password} = req.body
       const user = await user_model.findOne({email})
      if(!user || !user.comparedPassword(password)){
         return next(new CustomError("Email and password does not match",400))
      }
      const token = user.jsonwebtoken()
       user.password = undefined
     res.cookie('token',token,cookieOption)
      res.status(200).json({
         success:true,
         msg:"LogIn successfully",
         data:user
      })
   }

   catch (error) {
      console.log(error);
     return next(new CustomError("Error while login",401))
   }
}

exports.logout = (req,res,next)=>{
 try {
   res.cookie('token',null,{
      secure:true,
      maxAge:0,
      httpOnly:true
    })
    res.status(200).json({
      success:true,
      message:"User logged out successfully"
    })
 } catch (error) {
    res.next(new CustomError('Please try again',500))
 }
}

