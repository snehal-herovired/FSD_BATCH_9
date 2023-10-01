import React from 'react'

export default function Register(props) {
  console.log(("i am inside register"));
  function handleRegister(){
    props.setLogin(true)
  }
  return (
    <div>
     This is Registered component
     <div>
      if not registered , Register here <button onClick={handleRegister}>Register me</button>
     </div>

    </div>
  )
}
