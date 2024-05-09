const express =  require('express')
const chatRoute = express.Router()
const {accessChat,fetchChat} = require('../controller/chat.controller.js')
const {verifyToken} = require('../middleware/user.middleware.js')

chatRoute.post('/accessChat',[verifyToken],accessChat)
chatRoute.get('/fetchChat',[verifyToken],fetchChat)
module.exports = chatRoute