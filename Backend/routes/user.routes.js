const express = require('express')
const authRouter = express.Router()
const {register,login,logout} = require('../controller/user.controller.js')
const {registerValidtion} = require('../middleware/user.middleware.js')

authRouter.post('/register',[registerValidtion],register)
authRouter.post('/login',login)
authRouter.get('/logout',logout)

module.exports = authRouter