require('dotenv').config()
const user_model = require('./models/user.model.js')
const bcrypt = require('bcrypt')
const app = require('./app.js')
// async function init() {
//     try {
//       let user = await user_model.findOne({ role: "Admin" });
//       if (user) {
//         console.log("Admin already exist");
//         return;
//       }
  
//       try {
//        user =  await user_model.create({
//           name: "Diksha",
//           username:"diksha3094",
//           role: "Admin",
//           email: "uniquedikshagupta02@gmail.com",
//           password: bcrypt.hashSync("diksha1", 8),
//           mobile_no:"1234567891",
//           gender:"Female"
//         });
//         console.log("Admin created successfully", user);
//       } catch (error) {
//         console.log("Admin is not created",error);
//       }
//     } catch (error) {
//       console.log("Error while reading the data");
//     }
//   }

  // init();
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT}`);
})