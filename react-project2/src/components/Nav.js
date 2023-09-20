import React from "react";
import Button from "./Button";
import '../styles/Nav.css'
import logo from '../assets/logo.png'

function Nav(){
  return(
    <div className={`Nav`}>
    <img src={logo}></img>
      {/* <Button>버튼</Button> */}
    </div>
  )
}

export default Nav