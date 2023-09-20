import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import '../styles/Nav.css'
import logo from '../assets/logo.png'

function Nav(){
  const navigate = useNavigate()
  const toHome = () => {
    console.log('로고클릭')
    navigate('/home')
  }
  return(
    <div className={`Nav`}>
    <img src={logo} onClick={toHome}></img>
      {/* <Button>버튼</Button> */}
    </div>
  )
}

export default Nav