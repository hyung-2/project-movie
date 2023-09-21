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
    <div className="btn-box">
      <Button>즐겨찾기</Button>
      <Button>로그아웃</Button>
    </div>
    </div>
  )
}

export default Nav