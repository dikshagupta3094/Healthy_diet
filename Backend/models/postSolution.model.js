const mongoose = require('mongoose')

const postSolutionSchema = new mongoose.Schema({
    queryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PostQuery',
        required:true
    },
    expertId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    content:{
        type:String,
        required:true
    }
},{timestamps:true,versionKey:false})

module.exports = new mongoose.model('postSolution',postSolutionSchema)

