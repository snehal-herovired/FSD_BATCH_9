
import './App.css';
import Header from './components/pages/Header';
import Register from './components/auth/Register';
import { useState,useEffect } from 'react';
import Visible from './components/pages/Visible';
import axios from 'axios';
import ProductPage from './components/pages/ProductPage';
function App() {
  // console.log("inside App component...")
const [captureName,setCapturedName]=useState('');

  // component :what is ?
  // functional component ,:why?
  // jsx : what?
  // react fragment <></> ?
  // what is props? why do we props?
  // what is virtual dom and babel?
  // how to pass mulptiple props ?practical ?
  // what is rendering ?
  // why do we use className instead of class on html tags?

  // What is State? why do we state?
  // what is hooks? : they special js functions :
  //what is useState hook?
  // what is conditional rendering(? :  ,&&) ?How do we do this ? pracitical?
  // how to set states using useState? pratical?
  // what is useEffect hooks? 

  // Hooks : special js function , used for manipulating data accorss component.
  // Manjor used fundamental hooks :useState and UseEffect.

  // UseState :by using useState , we store info or data or state of component.
  //      statevariable,statefunction
  // const [count,setCount] =useState(0) //default value or intial value

  // const [shouldnameChange,setShouldNameChange]=useState(false);
  // // situation : add name :-> exisiting object:-> new name added .
  // const [a,setA]=useState({
  //   name:"khusbu"
  // })

  // console.log(a,"this is value of my state variable")

  // function increment(){
  // // console.log("clicking + btn");
  // setCount((prev)=>{
  //   return prev+1;
  // })
  // }

  // function changetheName(){
  // // false -> true
  // setShouldNameChange((prev)=>{
  //   //without toggle
  //   // return true
  //   // toggeling : 
  //   return !prev
  // })
  // }

  // state to manage login ;
  // React's lifecycle : Mounting ->Updating->Unmouting 
  // subphases pf react's lifecycle : class components
  // React's lifecycle methods being execute in functional comp : UseEffect
  const [login, setLogin] = useState(false);

// *****************************************************************************************
// This hooks is responsible for side-effects on the react component.
// useEffect(()=>{
// //main logic area
// // when component mounts 
// console.log("component is mouting...from useEffect")
// setLogin(true)
// return ()=>{
//   //cleanup functions
//   // this will work during unmouting phase.
//   //it prevents memory leakage when the component has been unmounted. 
// }

// },[])  //dependecy array
// const [productdata,setproductData]=useState([]);
// console.log(productdata,"this is my product data");
// ******************************API CALL*******************************
useEffect(()=>{
  // const fetchdata = async()=>{
  //   let response =await axios.get('https://dummyjson.com/products')
  //   console.log(response.data.products);
  //   setproductData((prev)=>{
  //     return response.data.products
  //   })
  // }
  // fetchdata();
},[])

// 1. dependancy array is empty :UseEffect will run only once, when component mounts

//2. dependancy array is depended on some info or state, then useffect will trigger
// as many times as you change that particular state.






  return (
    <>

  
{/* <button onClick={increment}>+</button>
   {count}
<button>-</button> */}


  {/* {
    login && <Visible/>

  } */}
  <Header setCapturedName={setCapturedName}/>
  <ProductPage captureName={captureName}/>

    </>
  );
}

export default App;

