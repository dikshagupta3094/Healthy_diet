const express = require('express')
const solutionroute = express.Router()
const {postSolution} = require('../controller/solution.controller.js')
const {verifyToken,postSolutionValidation} = require('../middleware/user.middleware.js')
solutionroute.post('/postSolution/:queryId',[verifyToken,postSolutionValidation('Diet expert')],postSolution) 
module.exports = solutionroute