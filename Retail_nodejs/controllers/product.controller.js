
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

// Update product details by id;
// id is passed as params;
// :id
const updateProduct =async(req,res)=>{
    let {id}=req.params;
    let {price}=req.body;
    console.log(id,price,"from requests");
    // let id =req.params.id
  try {
    //                                                       id,update,options
        const updateProduct = await ProductModel.findByIdAndUpdate({_id:id},{Price:price},{
            new:true
            // mongoose to return this new document;
        })
        if(!updateProduct){
            return res.status(400).json({
                message:'product not updated'
            })
        }

        res.status(200).json({
            message:'product updated successfully',
            updateProduct
        })
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({
            message:'error in updating product'
        })
    }
}

const deleteProduct =async(req,res)=>{
    let {id} =req.params;
    try {
        const deletedproduct =await ProductModel.findByIdAndDelete({_id:id});
        if(!deletedproduct){
            return res.status(400).json({
                message:'product not deleted'
            })
        }
        res.status(200).json({
            message:"product deleted succesfully",
            deletedproduct
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message:'could not delete the product'
        })
    }
}

// GET /api/products?id=1: Get details of a specific product by ID.
//  req.query

const getproductDetailbyid =async(req,res)=>{
  let {id}=req.query;
  try {
    const getProduct =await ProductModel.findById({_id:id});
    if(!getProduct){
        return res.status(400).json({
            message:'no product with this id'
        }) 
    }

    res.status(200).json({
        message:'got the product',
        getProduct
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
        message:'something went wrong!'
    }) 
  }
}

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getproductDetailbyid
}
