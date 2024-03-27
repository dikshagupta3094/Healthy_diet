const mongoose = require('mongoose')
const DB_url = process.env.DB_URI
const connectTodb = async(req,res)=>{
    try {
    const databaseInstance = await mongoose.connect(`${DB_url}`)
    console.log(`Database is connected ${databaseInstance.connection.host}`);
    } catch (error) {
        console.log(`Sorry! Database is not connected ${error}`);
    }
}

module.exports = connectTodb