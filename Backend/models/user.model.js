const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    confirmPassword:{
      type:String
    },
    
    role: {
      type: String,
      enum: ["user","Diet expert"],
      default:"user"
      
    },
    passwordChangeAt:Date,
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date
  },
  { timestamps: true }
);

userSchema.pre('save',async function(next){
  if(this.isModified()){
    return next();
  }
  this.password = await bcrypt.hash(this.password,10)
  
})
userSchema.methods = {
   jsonwebtoken(){
      return jwt.sign({id:this._id,email:this.email,role:this.role},process.env.SECRET,{expiresIn:'24h'})
   },
   
   comparedPassword: async function(plainTextPassword){
       return await bcrypt.compare(plainTextPassword,this.password)
   },

   generatePasswordResetToken: async function(){
    const resetToken = crypto.randomBytes(20).toString('hex')
     this.forgotPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.forgotPasswordExpiry = Date.now()+ 2*60*1000 // 2 min from now 
     
    console.log(resetToken);
    console.log(this.forgotPasswordToken);
    return resetToken
}
}
module.exports = mongoose.model("user", userSchema);
