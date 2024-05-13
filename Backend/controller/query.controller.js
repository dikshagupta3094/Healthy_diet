const post_query = require('../models/postQuery.model.js')
const user_model = require('../models/user.model.js')
const CustomError = require('../utilis/customError.utilis.js')
const sendEmail = require('../utilis/sendEmail.utilis.js')
const { Types: { ObjectId } } = require('mongoose');
const mongoose = require('mongoose');


exports.postQuery = async(req,res)=>{
   try {
      const expertId = req.params.expertId  
      const find = await user_model.findById(expertId)
      const expertEmail = find.email
      if(!find){
         return next(CustomError('Unauthenticate Expert selected'),400)
      }
    const { age, content, dietaryGoals} = req.body
    const userId = req.user._id
    const user = await user_model.findById(userId)
        // Check if the user is attempting to post the same content again to the same expert
      const sameContentQuery = await post_query.findOne({
         userId,
         expertId,
         content
     });
      console.log("sameContentQuery",sameContentQuery);
     if (sameContentQuery) {
         return res.status(400).json({ message:'You have already posted the same content to this expert' });
     }

     //Creating new query and save in the database
    const query = await post_query.create({
      userId,
      expertId,
      age,
      content,
      dietaryGoals
    })
    await query.save();
     
    const message = `Hello ${find.name} \n A new query has been posted by ${user.name} please log in to the sytem to view and respond `
    console.log("Message",message);
    await sendEmail({
      email:expertEmail,
      subject:'New Query posted',
      message
     })
    res.status(201).json({
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


// exports.viewQuery = async(req,res,next)=>{
//     try {
//       const queries = await post_query.find()
      
//       const expertIds = [...new Set(queries.map(query => query.expertId))]; // Get unique expertIds
 
//       const loggedInExpertId = new ObjectId(req.user._id);
//      console.log(loggedInExpertId);
//       if (!expertIds.some(id =>id&& id.equals(loggedInExpertId))) {
//            console.log("Experts",expertIds.some(id =>id && id.equals(loggedInExpertId)));
//           return next(new CustomError('Expert Id not found',400))
//         } 
      
//       const expertQueries = queries.filter(query => {
//          return query.expertId && query.expertId.equals(loggedInExpertId);
//     });
//        res.status(200).json({
//         success:true,
//         message:'Query fetched successfully',
//         expertQueries
//        })
//    }
//    catch (error) {
//         console.log(error);
//         res.status(500).json({
//          success:false,
//          message:'Some internal error occured'
//         })
//     }
// }

exports.viewQuery = async(req,res,next)=>{
  try {
    const queries = await post_query.find();
    const expertIds = [...new Set(queries.map(query => query.expertId))]; // Get unique expertIds
    console.log('expertIds',expertIds);
    // const loggedInExpertId = req.user.id; 
    const loggedInExpertId = new ObjectId(req.user._id)
    console.log("loggedInExpertId",loggedInExpertId);
    //!expertIds.includes(loggedInExpertId)
    if (!expertIds.some(id => id.equals(loggedInExpertId))) {
      console.log(expertIds.some(id => id.equals(loggedInExpertId)));
        return next(new CustomError('Expert Id not found',400))
      } 

    // if(!expertIds.includes(loggedInExpertId)){
    //   return next(new CustomError('Expert Id is not found'))
    // }
    // const expertQueries = queries.filter(query => query.expertId === loggedInExpertId);
    const expertQueries = queries.filter(query => {
      console.log('Query expertId:', query.expertId);
      return query.expertId.equals(loggedInExpertId);
  });
     res.status(200).json({
      success:true,
      message:'Query fetched successfully',
      expertQueries
     })
 }
 catch (error) {
      console.log(error);
      res.status(500).json({
       success:false,
       message:'Some internal error occured'
      })
    }
}