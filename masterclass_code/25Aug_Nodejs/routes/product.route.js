// creating Product's custom route ;
const express =require('express');
const ProductRouter =express.Router();
const Products =require('../controllers/product.controllers')

ProductRouter.get('/info',Products);
ProductRouter.post('/post',Products)


module.exports=ProductRouter

