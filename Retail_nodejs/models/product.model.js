const mongoose = require('mongoose');
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

module.exports = ProductModel;