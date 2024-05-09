const messgaeModel = require('../models/message.model.js')
const userModel = require('../models/user.model.js')
const chatModel = require('../models/chat.model.js');
const messageModel = require('../models/message.model.js');
exports.sendMessage = async(req,res,next)=>{
    const { content, chatId } = req.body;

    if (!content || !chatId) {
      console.log("Invalid data passed into request");
      return res.sendStatus(400);
    }
  
    let newMessage = {
      sender: req.user._id,
      content: content,
      chat: chatId,
    };
  
    try {
      var message = await messageModel.create(newMessage);
  
      message = await message.populate("sender", "name")
      message = await message.populate("chat")
      message = await userModel.populate(message, {
        path: "chat.users",
        select: "name email",
      });
  
      await chatModel.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
  
      res.json(message);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }

}

exports.allMessage = async(req,res,next)=>{
    try {
        const message = await messageModel.find({chat:req.params.chatId})
        .populate("sender", "name pic email")
        .populate("chat");
        res.status(200).json({
            success:true,
            message
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:'Some internal error occured'
        })
    }
}