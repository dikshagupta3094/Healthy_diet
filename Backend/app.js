const express = require('express')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/user.routes.js')
const postQueryroute = require('./routes/postQuery.routes.js')
const app = express()
const connectTodb = require('./db/connect.db.js')

const errorMiddleware = require('./middleware/error.middleware.js')
connectTodb()
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRouter)
app.use('/api/query',postQueryroute)
// app.all('*',(req,res)=>{
//     return res.status(404).send("Oops! Page not found")
// })
app.use(errorMiddleware)
module.exports = app;