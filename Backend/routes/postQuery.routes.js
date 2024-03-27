const express = require('express')
const postQueryroute = express.Router()
const {postQuery} = require('../controller/postQuery.controller.js')
const {verifyToken,postQueryValidation} = require('../middleware/user.middleware.js')
postQueryroute.post('/postQuery',[verifyToken,postQueryValidation('user')],postQuery)

module.exports = postQueryroute