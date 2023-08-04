// let cartbtn =document.querySelector('button');
// let modal =document.querySelector('.modal')

// // 
// cartbtn.addEventListener('click',(event)=>{
//     modal.style.display="block"
    
// })

// 

const products =[
    {
        id:1,
        name:'product 1',
        company:"apple",
        qnty:0,
        totalqnty:12
    },
    {
        id:2,
        name:'product 2',
        company:"apple",
        qnty:0,
        totalqnty:12
    },
    {
        id:3,
        name:'product 3',
        company:"apple",
        qnty:0,
        totalqnty:12
    }
]


// function to display list of product

function displayproduct(){
    const productParent =document.querySelector('#product-list');

    // data coming from fetch request
    //  async-await 
   // your rewsponse from fetch should be array.

   products.forEach((product)=>{
     const productdiv = document.createElement('div');
     
     productdiv.innerHTML =`<div class="product" name=${product.id}><p>${product.name}</p><br>
     <p>${product.company}</p><br>
     <p id="items-quantity">${product.qnty}</p>
     </div>
     <button id="add-cart" style="border-bottom:1px solid black">Add to cart</button>
     `

    //  whenever a new product card is created ,you have to add functionality
    // of add to cart on the product button
    let addtoCartBtn = productdiv.querySelector('#add-cart');
    addtoCartBtn.addEventListener('click',addtoCart)


     productParent.appendChild(productdiv)

   })

}

displayproduct()

function addtoCart(event){
    let parentDivForCartElement =document.querySelector('#cart-items');

    console.log(parentDivForCartElement.innerHTML);
    // console.log("clicking on button");
    //  we can add the card where this button add to cart on which we are clicking
   console.log(event.target.closest('div'));
//    now store the selected div invariable;

let itemToAdd =event.target.closest('div').querySelector('.product');
//  checks to check if product quantiy is less than or equal quantiy
//  check a condition if the qnty is 0 than populate whole innerhtml ,otherwsie only increase qunatiy
// increase qnty and than add 
let itemQnty =itemToAdd.querySelector('#items-quantity');
// console.log(itemQnty.textContent);
itemQnty.textContent = parseInt(itemQnty.textContent) + 1 
// console.log(itemToAdd.innerHTML);
   parentDivForCartElement.innerHTML +=itemToAdd.innerHTML



}
