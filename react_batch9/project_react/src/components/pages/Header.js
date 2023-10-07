import React from 'react'

export default function Header({setCapturedName}) {
  // console.log("i am inside header component...");
  // e_commerce : cart 
  // States : are info or data related to component .
  // props : way of passing info to other component.
  // function changeName() {
  //   //logic 
  //   // prev: conditon is not depended .
  //   props.setA((prev) => {
  //     return {
  //       id: 2,
  //       name: "herovired"
  //     }
  //   })
  // prev : condition depend previous value
  //   props.setA((prev)=>{
  //     return {
  //     ...prev,
  //   secondName:"herovired"
  //     }
  //   })
  let styleObj = {
    height: "10%",
    width: "100%",
    backgroundColor: "lightblue"
  }
  
  const searchname = (event) => {
    
    setCapturedName(event.target.value)
  }

return (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchname} />
          </form>
        </div>
      </div>
    </nav>


  </>
)
}
