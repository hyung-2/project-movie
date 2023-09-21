import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Loginpage.css'
import Nav from '../components/Nav'
import Button from "../components/Button";
import logo from '../assets/logo.png'
import Login from "../components/Login";
import Register from "../components/Register";

function Loginpage(){
  
    //회원가입창 슬라이드
    const goRegister = () => {
      const LoginBox = document.querySelector('.Login')
      const RegisterBox = document.querySelector('.Register')

      LoginBox.classList.add('goleft')
      RegisterBox.classList.add('toleft')
    }
    //장르 체크 슬라이드
    const goCheckbox = () => {
      const RegisterBox = document.querySelector('.Register')
      const checkBox = document.querySelector('.check-box')

      RegisterBox.classList.add('totheleft')
      checkBox.classList.add('gogoleft')
    }

    //로그인으로 슬라이드
    const goLogin = () => {
      const LoginBox = document.querySelector('.Login')
      const RegisterBox = document.querySelector('.Register')
      const checkBox = document.querySelector('.check-box')

      checkBox.classList.remove('gogoleft')
      RegisterBox.classList.remove('totheleft')
      RegisterBox.classList.remove('toleft')
      LoginBox.classList.remove('goleft')
    }

  return(
    <div className="Loginpage">
      <img src={logo}></img>
      <div className="loginbox">
        <Login handleClick={goRegister}></Login>
        <Register handleClick={goCheckbox}></Register>
        <div className="check-box">
          <div className="input-box">
            <input type='checkbox' id="horror" />
            <label for='horror'>공포</label>
            <input type='checkbox' id='drama' />
            <label for='drama'>드라마</label>
            <input type='checkbox' id='action' />
            <label for='action'>액션</label>
          </div>
          <Button>가입완료하기</Button>
          <Button handleClick={goLogin}>로그인하기</Button>
        </div>
      </div>
    </div>
  )
}


export default Loginpage