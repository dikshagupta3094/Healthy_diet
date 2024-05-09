const chatModel = require('../models/chat.model.js')
const user_model = require('../models/user.model.js');
const CustomError = require('../utilis/customError.utilis.js');

exports.accessChat = async(req,res,next)=>{
    const { userId } = req.body;

    if (!userId) {
      console.log("UserId param not sent with request");
      return res.sendStatus(400);
    }
  
    var isChat = await chatModel.find({
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
    .populate("users", "-password")
    .populate("latestMessage");
    // console.log("IS CHAT",isChat);
    isChat = await user_model.populate(isChat,{
        path: "latestMessage.sender",
        select:"name email"
    })
    if (isChat.length > 0) {
        res.send(isChat[0]);
      } else {
        let chatData = {
          chatName: "sender",
          users: [req.user._id, userId],
        }
        //  console.log("REQ ID",req.user._id,"UserID",userId);
        try {
            const createChat = await chatModel.create(chatData);
            const FullChat = await chatModel.findOne({ _id: createChat._id }).populate(
                "users",
                "-password"
              );
            //   console.log("Full Chat",FullChat);
              res.status(200).json(FullChat);
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success:false,
                message:"Some error occurred"
            })
        }
     };
}

exports.fetchChat = async(req,res,next)=>{
  try {
    chatModel.find({users:{ $elemMatch: { $eq: req.user._id } }})
    .populate("users", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .then(async (results) => {
      results = await user_model.populate(results, {
        path: "latestMessage.sender",
        select: "name email",
      });
      res.status(200).send(results);
    });
  } catch (error) {
     console.log(error);
     return next(CustomError('Some error ocurred',400))
  }
}