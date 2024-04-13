const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./routes/user.routes.js')
const Queryroute = require('./routes/query.routes.js')
const solutionroute = require('./routes/solution.routes.js')
const app = express()
const connectTodb = require('./db/connect.db.js')
const errorMiddleware = require('./middleware/error.middleware.js')
let corsOptions = {
    origin: "http://",
    method: "GET,POST,PUT,PATCH,DELETE", 
    Credential:true
}
app.use(cors(corsOptions))
connectTodb()
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',authRouter)
app.use('/api/query',Queryroute)
app.use('/api/solution',solutionroute)
app.all('*',(req,res)=>{
    return res.status(404).send("Oops! Page not found")
})
app.use(errorMiddleware)
module.exports = app;