import React, { useEffect} from "react";

import Button from "./Button";

import { FiUser, FiMail } from "react-icons/fi"
import { BiSolidLock } from "react-icons/bi"
import { AiFillCheckSquare, AiOutlineCheckCircle } from "react-icons/ai"
import { BsFillKeyFill } from 'react-icons/bs'

import '../styles/AccountProfile.css'

function AccountProfile({ handleChange, userInfo, NewUserInfo, setNewUserInfo }){

    // console.log(userInfo)
    // console.log(window.localStorage.getItem('accessToken'))
    // -40.5rem
    const next = () => {
      console.log('다음')
      const idInput = document.getElementById('userId')
      const emailInput = document.getElementById('userEmail')
      const userPwInput = document.getElementById('userPw')
      const newUserPwInput = document.getElementById('newUserPw')
      const newUserPw2Input = document.getElementById('newUserPw2')
      const userProfileCon = document.querySelector('.user-profile')
      const userGenreCom = document.querySelector('.user-likes')

      console.log(idInput.value)
      console.log(emailInput.value)
      console.log(userPwInput.value)
      console.log(newUserPwInput.value)
      console.log(newUserPw2Input.value)
      setNewUserInfo({
        newId: idInput.value,
        newEmail: emailInput.value,
        userPw: userPwInput.value,
        newPw: newUserPwInput.value,
      })
      userProfileCon.classList.add('toleft')
      userGenreCom.classList.add('toleft')
    }
  
 

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
          <BsFillKeyFill size="27"/>
          {/* <p className="labelname">비밀번호를 입력하세요</p> */}
          <input type='password' id='userPw' placeholder="현재 비밀번호를 입력하세요"></input>
        </label>
        <label htmlFor='newUserPw'>
          <BiSolidLock size="27"/>
          {/* <p className="labelname">비밀번호를 다시 입력하세요</p> */}
          <input type='password' id='newUserPw' placeholder="바꿀 비밀번호를 입력하세요"></input>
        </label>
        <label htmlFor='newUserPw2'>
          <BiSolidLock size="27"/>
          {/* <p className="labelname">비밀번호를 다시 입력하세요</p> */}
          <input type='password' id='newUserPw2' placeholder="바꿀 비밀번호를 다시 입력하세요"></input>
        </label>
      </div>
        <Button btnClass='loginbtn' handleClick={next}>다음</Button>
    </div>
      
  )
}

export default AccountProfile