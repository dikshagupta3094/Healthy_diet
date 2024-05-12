const express = require('express')
const Queryroute = express.Router()
const {postQuery,viewQuery} = require('../controller/query.controller.js')
const {verifyToken,postQueryValidation} = require('../middleware/user.middleware.js')
Queryroute.post('/postQuery/:expertId',[verifyToken,postQueryValidation('user')],postQuery)
Queryroute.get('/viewQuery',[verifyToken],viewQuery)

module.exports = Queryroute 
