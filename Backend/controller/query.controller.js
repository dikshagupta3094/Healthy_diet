const post_query = require('../models/postQuery.model.js')
const user_model = require('../models/user.model.js')
const CustomError = require('../utilis/customError.utilis.js')
exports.postQuery = async(req,res)=>{
   try {
      //changes
      const expertId = req.params.expertId
      //---
      const find = await user_model.findById(expertId)
      if(!find){
         return next(CustomError('Unauthenticate Expert selected'),400)
      }
    const newQuery = req.body
    const query = await post_query.create(newQuery)
    await query.save();
    res.status(200).json({
        success:true,
        message:"Query posted successfully",
        query
    })
    
   } catch (error) {
      console.log(error);
      res.status(500).json({
        success:false,
        message:"Error while posting query"
      })
   }
}
