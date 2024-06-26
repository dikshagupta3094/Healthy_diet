const express = require('express')
const authRouter = express.Router()
const {register,login,forgotPassword,resetPassword,getDietExpertId,verifyEmail,getAllUser,contact} = require('../controller/user.controller.js')
const {registerValidtion,verifyToken} = require('../middleware/user.middleware.js')

authRouter.post('/register',[registerValidtion],register)
authRouter.get('/getAllUser',[verifyToken],getAllUser)
authRouter.post('/verifyEmail',verifyEmail)
authRouter.post('/login',login)
authRouter.post('/forgotPassword',forgotPassword)
authRouter.post('/resetPassword/:resetToken',resetPassword)
authRouter.post('/contact', contact)
authRouter.get('/getDietExpertId',getDietExpertId)
module.exports = authRouter

