// mapping of product
//APi : fetch reuqest to call the api
// products data , map and DOM 
// using search and filter

async function fetchingdata() {
    // dom selector
    const searchInput = document.querySelector('#search');
    console.log(searchInput);
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    console.log(data.products);


    // function is for mapping the filteredData
    function rendercard(filteredData) {

        const mainbody = document.querySelector('.main');
        console.log(mainbody, "MAIN BODY");
        // removing anything previously in the mainbody innerHTMl
        mainbody.innerHTML = '';

        filteredData.forEach((element) => {
            mainbody.innerHTML += `  <div class="card" style="width: 18rem;">
            <img src=${element.thumbnail} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.brand}</p>
                <a href="#" class="btn btn-primary">View Product</a>
            </div>
        </div>`
        })


    }

    // function to handle search and then filter
    function searchbasedonInput(){
        const searchTerm =searchInput.value.toLowerCase();
        let filteredData =data.products;

        if(searchTerm.trim !==""){
            filteredData =data.products.filter((element)=>{
                if(element.title.toLowerCase().includes(searchTerm)){
                    return element;
                }
                if(element.brand.toLowerCase().includes(searchTerm)){
                    return element;
                }
            })
        }
        rendercard(filteredData);
    }
  searchInput.addEventListener('input',searchbasedonInput)


//   intiailly all the product should be diplayed
rendercard(data.products)
}

fetchingdata();