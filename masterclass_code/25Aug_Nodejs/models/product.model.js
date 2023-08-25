const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductSchema = new Schema({
  productName:{
    type:String
  },
  productTqnty:{
    type:Number,
    default:20
  },
  company:{
    type:String
  },
  price:{
    type:String
  },
  brand:{
    type:String
  },
  colorChoice:{
    type:String,
    enum:['red','yellow','green'],
    default:'red'
  },
  comments:[{}],
  featured:{
    type:Boolean,
    default:false
  }
  
});

// creat model from schema;
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports=ProductModel;