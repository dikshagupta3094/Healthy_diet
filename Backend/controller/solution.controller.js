const post_query = require('../models/postQuery.model.js')
const post_solution = require('../models/postSolution.model.js')
const CustomError = require('../utilis/customError.utilis.js')
const sendEmail = require('../utilis/sendEmail.utilis.js')
const user_model = require('../models/user.model.js')

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
    //Change the status of query from pending to answered
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
      content
  })
    await post_query.findByIdAndUpdate(
      queryId,
      { solutionId: querySolution._id },
      { new: true }
    );

  
   await querySolution.save();
   
    // Send an email to the user
    const user = await user_model.findById(updatedQuery.userId);
    const userEmail = user.email; // Assuming the email is stored in the 'email' field
    const subject = 'Your query has been answered';
    const message = `Your query has been answered. Please log in to the system to view the solution.`;
    await sendEmail({
      email:userEmail,
      subject,
      message
    });
    console.log(message);

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


exports.viewSolution = async (req, res, next) => {
  const userId = req.user._id; 
  const queryId = req.params.queryId
  
  console.log("userId",userId);
  console.log("queryId",queryId);
  try {
    const query = await post_query.findOne({
      userId: userId,
      _id: queryId // Assuming queryId is the _id field of the query document
    });
     console.log("Query",query);
    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Query not found',
      });
    }

    // const solution = await post_solution.findOne({ _id:solution });
    const solution = await post_solution.findOne({ _id: query.solutionId });

    if (!solution) {
      return res.status(400).json({
        success: false,
        message: 'Solution not found',
      });
    }
    return res.status(200).json({
      success: true,
      solution,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Error while fetching solution',
    });
  }
};

exports.fetchQueries = async(req,res,next)=>{
  try {
    const queries = await post_query.find()
    console.log("All queries",queries);
    // const userQueries = queries.filter(query => query.userId === req.user._id)
    // const userQueries = queries.filter(query => {
    //   console.log("Query userId:", query.userId, typeof query.userId);
    //   console.log("Req userId:", req.user._id, typeof req.user._id);
    //   return query.userId === req.user._id;
    // });
    const userQueries = queries.filter(query => query.userId.equals(req.user._id));

    console.log(userQueries);   
    res.status(200).json({userQueries})
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:"Something went wrong"
    })
  }
}