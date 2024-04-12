require('dotenv').config()
const user_model = require('./models/user.model.js')
const bcrypt = require('bcrypt')
const app = require('./app.js')
  
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT}`);
})