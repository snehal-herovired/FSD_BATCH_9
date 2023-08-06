let Product =[
    {
        id:1, // unique and autointecrement 
        product_name:"Apple Iphone 7",  //String
        product_details:"abc abc",
        product_image:"",
        price_per_qnty:20,  //integers
        total_qnty:10,  // integers
        product_color:["pink","red","blue","yellow"], //enums
        category:"electronics",
        ratings :"4.0",
        brand:"Apple",
        featured:false,
        comments :[
            {
                id:1,
                username:'Snehal',
                email:"xyz@gmail.com"
                //  and other details of user who commented
            },
            {
                id:2,
                username:"Mario",
                email:"sample@gmail.com"
            }
        ],//array
        discount:true,
        discount_value_per_qnty:5,
        best_sellers:true,
        size_category:[], //enums,
        wear_category:"",
        material_used:"",
        style:"",
        washable:false

    }
]

module.exports=Product

// size_category ,wear_category ,material_used, style,washable
// 
// create 2 disctinive data for electoronics, 2 for fashionwears, 3 for kitchenWare.