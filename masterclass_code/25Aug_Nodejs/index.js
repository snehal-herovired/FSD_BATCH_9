// project intialization : npm init -y
// install : express, mongoose,morgan,nodemon, dotenv: npm install 
// npm i mongoose
// npx nodemon index.js
// MVC : model ,views and controllers
// 
// MVCR : model,views,controllers and routes
const express =require('express');

const morgan =require('morgan');
require('dotenv').config();

const app = express();

const Port =process.env.Port;
// we need databse connection;
const Dbconnect =require('./connection');
Dbconnect();

// iimporting my custom route here and using it;
const ProductRouter =require('./routes/product.route');

//loading my route
// /product/info : get 
//         main gateway route,
app.use('/product',ProductRouter)

// /product/post :post 
app.listen(Port,()=>{
    console.log(`Server running on Port ${Port}`)
})