import React, { useEffect} from "react";

import Button from "./Button";

import { FiUser, FiMail } from "react-icons/fi"
import { BiSolidLock } from "react-icons/bi"
import { AiFillCheckSquare, AiOutlineCheckCircle } from "react-icons/ai"

import '../styles/AccountProfile.css'

function AccountProfile({ handleChange, userInfo }){

    // console.log(userInfo)
    console.log(window.localStorage.getItem('accessToken'))
  useEffect(() => {
    if(userInfo.userId !== undefined){
      const idInput = document.getElementById('userId')
      const emailInput = document.getElementById('userEmail')
      idInput.value = userInfo.userId
      emailInput.value = userInfo.email
    }
  }, [userInfo])

  return (
    <div className="user-profile">
      <div className="userInfo-container">
        <label htmlFor='userId'>
          <FiUser size="27"/>
          {/* <p className="labelname">아이디를 입력하세요</p> */}
          <input type='text' id='userId' placeholder="아이디를 입력하세요"></input>
        </label>
        <label htmlFor='userEmail'>
          <FiMail size="27"/>
          {/* <p className="labelname">이메일을 입력하세요</p> */}
          <input type='text' id='userEmail' placeholder="이메일을 입력하세요"></input>
        </label>
        <label htmlFor='userPw'>
          <BiSolidLock size="27"/>
          {/* <p className="labelname">비밀번호를 입력하세요</p> */}
          <input type='password' id='userPw' placeholder="비밀번호를 입력하세요"></input>
        </label>
        <label htmlFor='userPw2'>
          <BiSolidLock size="27"/>
          {/* <p className="labelname">비밀번호를 다시 입력하세요</p> */}
          <input type='password' id='userPw2' placeholder="비밀번호를 다시 입력하세요"></input>
        </label>
        <Button btnClass='loginbtn'>정보 수정</Button>
      </div>
    </div>
      
  )
}

export default AccountProfile