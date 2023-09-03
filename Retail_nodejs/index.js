const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
app.use(morgan());
app.use(express.json());
//**********************************************/
// Defininf Port number
const Port =process.env.Port ;
//************************************************ */


const main = require('./dbconnection');
main()
    .then(() => console.log('mongoose databse connected'))
    .catch(err => console.log(err));




// ***************main or gateway api enpoint for our Product
const ProductRouter = require('./routes/product.route');
app.use('/api',ProductRouter)

const UserRouter =require('./routes/user.route')
app.use('/auth',UserRouter)



// Category API endpoints
//POST /api/categories: Create a new category.
app.post('/api/categories',async(req,res)=>{
    try {
        // make sure to take out from request body the json keys.
        let {categoryName, description}=req.body

        // make sure to insert the values inside model in the same way defined in the schema
        const CategoryData =new CategoryModel({
            Category_name :categoryName,
            Description:description
        });
        let sendcategoryData =await CategoryData.save();
        res.status(200).json({
            message:'category data inserted successfully',
            sendcategoryData
        })
        
    } catch (error) {
        console.log(error,'POST /api/categories');
        res.status(404).json({
            error:error.message
        })
    }
})














app.listen(Port, () => {
    console.log('server running...');
})
