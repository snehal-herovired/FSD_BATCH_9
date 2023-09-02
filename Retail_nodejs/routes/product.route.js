// we are going to make productrouter , a custome router
const express = require('express');
const ProductRouter = express.Router();
const {getAllProduct,
    createProduct} =require('../controllers/product.controller')

// API ENDPOINTS :PRODUCTS MODEL
// GET /api/products: Get a list of all products.

// http://localhost:5000/api/products :GET
ProductRouter.get('/products',getAllProduct)


// POST /api/products: Create a new product.
// http://localhost:5000/api/products :POST
ProductRouter.post('/products', createProduct)

module.exports = ProductRouter;
