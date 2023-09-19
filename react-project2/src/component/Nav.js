import React from "react";
import Button from './Button'
import './Nav.css'
import logo from './logo.png'

function Nav(){
  return(
    <div className={`Nav`}>
    <img src={logo}></img>
      {/* <Button>버튼</Button> */}
    </div>
  )
}

export default Nav