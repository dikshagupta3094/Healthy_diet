const express = require('express')
const Queryroute = express.Router()
const {postQuery} = require('../controller/query.controller.js')
const {verifyToken,postQueryValidation} = require('../middleware/user.middleware.js')
Queryroute.post('/postQuery',[verifyToken,postQueryValidation('user')],postQuery)

module.exports = Queryroute 
