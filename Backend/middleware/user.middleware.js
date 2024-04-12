const validator = require('email-validator')
const jwt = require('jsonwebtoken')
const CustomError = require('../utilis/customError.utilis.js')

const registerValidtion = (req,res,next)=>{
  const isValidEmail = validator.validate(req.body.email)
  if(!isValidEmail){
    return res.status(400).json({
        success:false,
        message:"Email is not in valid format"
    })
  }
 next()
}

const verifyToken = async(req,res,next)=>{
  const {token} = req.cookies
  if(!token){
    return next(new CustomError("Unauthenticated user",401))
  }

  const user =await  jwt.verify(token,process.env.SECRET)
    req.user = user
    // console.log("REQ USER",req.user);
    next()

 
}
//at this middleware this req will have this user property
const postQueryValidation =(role)=>{
  return (req,res,next)=>{
     if(req.user.role !=role){
      console.log(req.user.role);
      console.log(role);
      const error = new CustomError('Only user can post query',401)
      next(error)
     }
     next()
  }
}

const postSolutionValidation = (role)=>{
  return (req,res,next)=>{
    if(req.user.role !=role){
      console.log("Role as diet expert: ",req.user.role);
      const error = new CustomError('Only diet expert can post solution',401)
    next(error)
    }
    next()
  }
}
module.exports = {
    registerValidtion,
    verifyToken,
    postQueryValidation,
    postSolutionValidation
}
