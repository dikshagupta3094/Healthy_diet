const mongoose = require('mongoose')

const postQuerySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    expertId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:null
    },
    content:{
        type:String,
        required:true
    },
    dietaryGoals:{
        type:[String]
    },
    age:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','answered'],
        default:'pending'
    },
},{timestamps:true,versionKey:false})

module.exports = new mongoose.model('PostQuery',postQuerySchema)