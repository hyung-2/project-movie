import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import '../styles/Login.css'



function Login({handleClick}){
  
  //로그인 인풋 꾸미기
  const addClass = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    if(e.target.value !== ''){
      e.target.previousElementSibling.classList.add('forcusing')
      console.log(e.target.previousElementSibling)
    }else{
      console.log(e.target.previousElementSibling)
      e.target.previousElementSibling.classList.remove('forcusing')
    }
  }

  return(
    <div className="Login">
      <label for='loginUserId'>
        <p className="labelname">아이디를 입력하세요</p>
        <input onKeyUp={addClass} type='text' id='loginUserId'></input>
      </label>
      <label for='loginUserPw'>
        <p className="labelname">비밀번호를 입력하세요</p>
        <input onKeyUp={addClass} type='password' id='loginUserPw'></input>
      </label>
      <Button btnClass='loginbtn'>로그인</Button>
      <p className="registerbtn" onClick={handleClick}>아직 회원이 아니신가요?</p>
    </div>
  )
}


export default Login