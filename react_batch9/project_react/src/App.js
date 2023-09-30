
import './App.css';
import Header from './components/pages/Header';
import Register from './components/auth/Register';
import { useState } from 'react';
function App() {
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
const [count,setCount] =useState(0) //default value or intial value

const [shouldnameChange,setShouldNameChange]=useState(false);
// situation : add name :-> exisiting object:-> new name added .
const [a,setA]=useState({
  name:"khusbu"
})

console.log(a,"this is value of my state variable")
 
function increment(){
// console.log("clicking + btn");
setCount((prev)=>{
  return prev+1;
})
}
  
function changetheName(){
// false -> true
setShouldNameChange((prev)=>{
  //without toggle
  // return true
  // toggeling : 
  return !prev
})
}
  return (
<>

<Header count={count} setA={setA}/>
<Register/>
<button onClick={increment}>+</button>
   
<button>-</button>
<button onClick={changetheName}>Change the Name</button>
{
  shouldnameChange ? <p>Herovired</p> : <p>Hero</p>
}

{/* <p>This is Name of User :{a.id}: {a.name}</p> */}
   
</>
  );
}

export default App;

