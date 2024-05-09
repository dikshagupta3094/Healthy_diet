const express =  require('express')
const messageRoute = express.Router()
const {verifyToken} = require('../middleware/user.middleware.js')
const {sendMessage,allMessage} = require('../controller/message.controller.js')
messageRoute.post('/sendMessage',[verifyToken],sendMessage)
messageRoute.get('/allMessage/:chatId',[verifyToken],allMessage)
module.exports = messageRoute