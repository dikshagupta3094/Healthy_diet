const mongoose = require('mongoose')

const postQuerySchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    dietaryGoals:{
        type:[String]
    }
},{timestamps:true,versionKey:false})

module.exports = new mongoose.model('PostQuery',postQuerySchema)