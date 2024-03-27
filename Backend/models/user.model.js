const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
    mobile_no: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      required: true,
      type: String,
    },
    role: {
      type: String,
      enum: ["user","Diet expert"],
      default:"user"
      
    },

  },
  { timestamps: true }
);

userSchema.pre('save',async function(next){
  if(this.isModified()){
    return next();
  }
  this.password = await bcrypt.hash(this.password,10)
  // this.password = await bcrypt.hash(this.confirmPassword,10)
})
userSchema.methods = {
   jsonwebtoken(){
      return jwt.sign({id:this._id,email:this.email,role:this.role},process.env.SECRET,{expiresIn:'24h'})
   },

   comparedPassword: async function(plainTextPassword){
       return await bcrypt.compare(plainTextPassword,this.password)
   }
}
module.exports = mongoose.model("user", userSchema);
