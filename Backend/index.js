require('dotenv').config()
const {app,server} = require('./app.js')
server.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT}`);
})