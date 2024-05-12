const post_query = require('../models/postQuery.model.js')
const post_solution = require('../models/postSolution.model.js')
const CustomError = require('../utilis/customError.utilis.js')


exports.postSolution = async(req,res,next)=>{
  const queryId = req.params.queryId
  const {content} = req.body
  
  if(!queryId){
    return next(new CustomError('Please provide query ID'))
  }
  if(!content){
    return next(new CustomError('Please provide all fields'),400)
  }
  try {
    const updatedQuery = await post_query.findByIdAndUpdate(
      queryId, 
      { status: 'answered' },
      { new: true } 
    );
    if (!updatedQuery) {
      // Handle case where query not found
      return res.status(404).json({
        success: false,
        message: 'Query not found',
      });
    }
    const querySolution = await post_solution.create({
        queryId,
        // expertId,
        content
    })
   await querySolution.save();
   
   //Change the status of query from pending to answered

   return res.status(200).json({
    success:true,
    message:"Solution posted successfully",
    querySolution
   })
  } catch (error) {
     console.log(error);
     res.status(500).json({
        success:false,
        message:"Error while posting solution"
     })
  }
}

exports.viewSolution = (req,res,next)=>{
    
}

