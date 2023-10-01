import React from 'react'

export default function Header(props) {
  console.log("i am inside header component...");
  // e_commerce : cart 
  // States : are info or data related to component .
  // props : way of passing info to other component.
  function changeName(){
    //logic 
    // prev: conditon is not depended .
    props.setA((prev)=>{
      return {
        id:2,
        name:"herovired"
      }
    })
    // prev : condition depend previous value
  //   props.setA((prev)=>{
  //     return {
  //     ...prev,
  //   secondName:"herovired"
  //     }
  //   })
  }

  return (
    <>
    <div>

    My passed value from App.js is {props.count}
    <button onClick={changeName}>Add username</button>

    </div>
    
   
    </>
  )
}
