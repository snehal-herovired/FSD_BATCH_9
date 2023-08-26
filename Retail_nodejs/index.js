const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
app.use(morgan());
app.use(express.json());
//**********************************************/
// Defininf Port number
const Port = 5000;
//************************************************ */

// *********DATABASE CONNECTION *****************/

async function main() {
    await mongoose.connect('mongodb+srv://snehalmishra:123@cluster0.8owrboj.mongodb.net/');
}
main()
    .then(() => console.log('mongoose databse connected'))
    .catch(err => console.log(err));

// **********************************************************************************

// ***************DEFINING THE SCHEMA AND MAKING MODEL OF MONGODB *********/
// PRODUCT SCHEMA
const { Schema } = mongoose;
const ProductSchema = new Schema({
    // validations
    Product_name: {
        type: String,
        required: true
    },
    Product_description: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Category: {
        // (Reference to Category Schema _id)
        // this field will be storing OBJECTID of another schema
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    Stock_quantity: {
        type: Number,
        required: true,
        default: 20
    }

});
// collections,model and documents
// making models out this schema 
const ProductModel = mongoose.model('Product', ProductSchema);

// CATEGORY SCHEMA
const CategorySchema = new Schema({
    Category_name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }

})

const CategoryModel = mongoose.model('Category', CategorySchema)



// API ENDPOINTS :PRODUCTS MODEL
// GET /api/products: Get a list of all products.

app.get('/api/products', async (req, res) => {
    // logic which will give us all the products in th db;
    try {
        let productdata = await ProductModel.find({});
        if (productdata.length < 1) {
            return res.status(401).json({
                message: "there is no data in product model"
            })
        }

        res.status(201).json({
            message: "Data is there",
            productdata
        })
    } catch (error) {
        console.log(error, "ERROR FROM GET /api/products");
        res.status(404).json({
            error:error.message
        })
    }
})
// POST /api/products: Create a new product.
app.post('/api/products', async (req, res) => {
    try {
        // logic is to get the product data from request body coming  in the request
        let { productName, productDescription, price, categoryId, stockQuantity } = req.body;
        const productdata = new ProductModel({
            Product_name:productName,
            Product_description:productDescription,
            Price:price,
            Category:categoryId,
            Stock_quantity:stockQuantity
        })
        // it is save all the data to database;
        let sentdata = await productdata.save();
        res.status(200).json({
            message: "data inserted successfully",
            sentdata
        })
    } catch (error) {
        console.log(error, "POST /api/products");
        res.status(404).json({
            error:error.message
        })
    }

})

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
