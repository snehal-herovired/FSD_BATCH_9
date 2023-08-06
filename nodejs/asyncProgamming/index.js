const express =require('express');
const Product =require('./product')
const app =express();
// enable 
app.use(express.json());
const Port =5000;

app.get('/product',(req , res)=>{
  res.json({
    message:"data is given to you",
    product:Product
  })
})


let obj ={
    id:1
}
// es6 concept :ecmasrcipt v6 
// obj.keyname
let {id} =obj;
console.log(id,"id value inside object")


app.post('/addproduct',(req,res)=>{
  let {product_name,
    product_details,
    product_image,
    price_per_qnty,
    total_qnty,
    product_color,
    category,
    ratings,
    brand,
    featured,
    comments,
    discount,
    discount_value_per_qnty,
    best_sellers,
    size_category,
    wear_category,
    material_used,
    style,
    washable
}= req.body;
console.log(req.body,"this ouput is from the request body coming from postman");

// making a object of the keys i got from req.body because we have push this values inside
// our product array .
let newObject={
    id:Product.length+1,
    product_name,
    product_details,
    product_image,
    price_per_qnty,
    total_qnty,
    product_color,
    category,
    ratings,
    brand,
    featured,
    comments,
    discount,
    discount_value_per_qnty,
    best_sellers,
    size_category,
    wear_category,
    material_used,
    style,
    washable
}


Product.push(newObject);
res.json({
    message:"product added successfully",
    product:Product
})


})


app.put('/updateproduct/:id',(req,res)=>{
// middleware functions in express : functions which deals with request and response body
//  update our product inside our array based on ID.

// parameters :params 
let {id}=req.params ;
id =parseInt(id);
console.log(id,"id from parameters");
let {product_name} =req.body;

// finding the product inside our array based on ID;
let isProduct =Product.find(product=>product.id===id)
if(!isProduct){
    return res.json({
        message:"product is not there..."
    })
}

// if isproduct is there , than update the isProduct.product_name to the name we are
// passing in the req.body
isProduct.product_name =product_name;
return res.json({
    message:"product updated...",
    product:Product
})

})

app.listen(Port,()=>{
    console.log("server is running");
})