
const ProductModel =require('../models/product.model')

const getAllProduct= async (req, res) => {
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
}

const createProduct = async (req, res) => {
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

}

module.exports = {
    getAllProduct,
    createProduct
}