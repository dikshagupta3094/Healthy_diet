const express = require('express')
const authRouter = express.Router()
const {register,login,logout,forgotPassword,resetPassword,isAuthenticate} = require('../controller/user.controller.js')
const {registerValidtion,verifyToken} = require('../middleware/user.middleware.js')

authRouter.post('/register',[registerValidtion],register)
authRouter.post('/login',login)
authRouter.post('/forgotPassword',forgotPassword)
authRouter.post('/resetPassword/:resetToken',resetPassword)
authRouter.post('/contact', contact)
module.exports = authRouter

