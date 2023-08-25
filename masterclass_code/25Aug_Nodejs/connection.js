const mongoose =require('mongoose');
 // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test')

// connecting with database
async function Dbconnect(){
 try {
    await mongoose.connect(process.env.Mongo_URL)
    console.log('Connected to Mongodb')
 } catch (error) {
    console.log(error,'Error from Databse');
    process.exit(1);

 }

} 

module.exports =Dbconnect