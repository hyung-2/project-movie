import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import '../styles/Register.css'



function Register({handleClick}){
  
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
    <div className="Register">
      <label for='userId'>
        <p className="labelname">아이디를 입력하세요</p>
        <input onKeyUp={addClass} type='text' id='userId'></input>
      </label>
      <label for='userEmail'>
        <p className="labelname">이메일을 입력하세요</p>
        <input onKeyUp={addClass} type='text' id='userEmail'></input>
      </label>
      <label for='userPw'>
        <p className="labelname">비밀번호를 입력하세요</p>
        <input onKeyUp={addClass} type='password' id='userPw'></input>
      </label>
      <label for='userPw2'>
        <p className="labelname">비밀번호를 다시 입력하세요</p>
        <input onKeyUp={addClass} type='password' id='userPw2'></input>
      </label>
      <Button btnClass='loginbtn' handleClick={handleClick}>다음</Button>
    </div>
  )
}


export default Register