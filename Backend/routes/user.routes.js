const express = require('express')
const authRouter = express.Router()
const {register,login,logout,forgotPassword,resetPassword} = require('../controller/user.controller.js')
const {registerValidtion} = require('../middleware/user.middleware.js')

authRouter.post('/register',[registerValidtion],register)
authRouter.post('/login',login)
authRouter.get('/logout',logout)
authRouter.post('/forgotPassword',forgotPassword)
authRouter.put('/resetPassword/:resetToken',resetPassword)

module.exports = authRouter

