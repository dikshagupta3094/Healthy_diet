const mongoose = require('mongoose')

const postQuerySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    expertId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    solutionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'postSolution',
    },
    age:{
        type:Number,
        trim:true,
        required:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    },
    dietaryGoals:{
        type:[String],
        required:true
    },
    status:{
        type:String,
        enum:['pending','answered'],
        default:'pending'
    },
},{timestamps:true,versionKey:false})

module.exports = new mongoose.model('PostQuery',postQuerySchema)