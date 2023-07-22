//AJAX fetch ()
// 

//Promises Javascript 
//  Js Promises , where js provides you with special methods with 3 states:
// pending, resolved and rejected 
// ES 6 variant of JS
let mainbody = document.querySelector('.main');


// Promises necessary to deal api call 
// https://dummyjson.com/products
// list of products.

// handle the promise of fetch using async-await keyword,
// Fetch does by default a get request .
// why we are wrting await in front of fetch ? because fetch returns a promise
async function fetchdata (){
   let response = await fetch('https://dummyjson.com/products');

   // we are parsing the respone of fetch in a json format.
   // since it is promise type of function we are actually using await here.
   let data =await response.json();
   console.log(data.products);

   // now we want the array of product to be mapped inside the main body in card structure.
//    console.log(mainbody.innerHTML,"body main inner html content");
//   let mainbodyinnerHTML =mainbody.innerHTML
// FORMAT OF CARD
//  title ,brand , image , button
  // HEADER : you have to search box  , on this search box searching based on titelname
//    sum =sum +1;
   // we are going to map here and push the product info into card structure insdie the main body.
   data.products.map((element)=>{
      mainbody.innerHTML = mainbody.innerHTML + ` <div class="card">
      <div class="header" style="height: 30%;">Product name : ${element.brand}</div>
      <div class="image" style="height: 70%;">${element.title}</div>
  </div>
  `
   })
//    console.log(mainbody,"this is my innerhtml");
  
   // innerHTML  : it gives us any html content inside a parent element.
}

// we want to click on button and fetch all the data 
//on which html element you want to trigger event. : querySelector
// what should be type of event :click : addeventListener
// what will happen if you do that event.

// style all the component and make it look UI friendly and it should have a look a bit similar
// to ecommerce

let btn  = document.querySelector('.button');
console.log(btn);

// adveventListern(event,function_on_that_event)
btn.addEventListener('click',fetchdata)