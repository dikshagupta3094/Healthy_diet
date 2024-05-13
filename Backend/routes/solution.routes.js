const express = require('express')
const solutionroute = express.Router()
const {postSolution,viewSolution,fetchQueries} = require('../controller/solution.controller.js')
const {verifyToken,postSolutionValidation} = require('../middleware/user.middleware.js')
solutionroute.post('/postSolution/:queryId',[verifyToken,postSolutionValidation('Diet expert')],postSolution) 
solutionroute.get('/viewSolution/:queryId',[verifyToken],viewSolution)
solutionroute.get('/fetchQueries',[verifyToken],fetchQueries)
module.exports = solutionroute