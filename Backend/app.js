const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { Server } = require("socket.io");
const http = require('http')
const authRouter = require('./routes/user.routes.js')
const Queryroute = require('./routes/query.routes.js')
const solutionroute = require('./routes/solution.routes.js')
const app = express()
const connectTodb = require('./db/connect.db.js')
const errorMiddleware = require('./middleware/error.middleware.js')
const { verifyToken } = require('./middleware/user.middleware.js')
let corsOptions = {
    origin: "http://localhost:5173",
    method: "GET,POST,PUT,PATCH,DELETE", 
    credentials:true
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

//Socket io
const server = http.createServer(app)
const io = new Server(server,{
    cors:corsOptions
})
io.on("connection", (socket) => {
    console.log("connected - socket");

    socket.on("disconnect",()=>{
        console.log("Disconnect");
    })
  });
module.exports = {app,server,io};