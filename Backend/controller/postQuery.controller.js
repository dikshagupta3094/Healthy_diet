const post_query = require('../models/postQuery.model.js')

exports.postQuery = async(req,res)=>{
   try {
    const newQuery = req.body
    const query = await post_query.create(newQuery)
    res.status(200).json({
        success:false,
        message:"Query posted successfully",
        query
    })
   } catch (error) {
      res.status(500).json({
        success:false,
        message:"Error while posting query"
      })
   }
}

