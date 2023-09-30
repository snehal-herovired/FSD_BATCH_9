import React from 'react'

export default function Header(props) {
    console.log(props,"values inside the props")
    console.log("header rendering..")
  return (
    <div>Header :this value is from parent {props.a}</div>
  )
}
