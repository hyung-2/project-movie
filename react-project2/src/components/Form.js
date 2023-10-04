import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import '../styles/Form.css'
import Genres from '../api/Genres.json'



function Form({type, handleClick, genreLists}){
  
  const [userPickGenre, setUserPickGenre] =useState([])

  //로그인 인풋 꾸미기
  const addClass = (e) => {
    console.log(e.target)
    console.log(e.target.value)
    if(e.target.value !== ''){
      e.target.previousElementSibling.classList.add('forcusing')
    }else{
      e.target.previousElementSibling.classList.remove('forcusing')
    }
  }
 

  //회원가입 페이지 보이기
  const goSignup = () => {
    const loginBox = document.querySelector('.Login')
    const registerBox = document.querySelector('.Register')
    loginBox.classList.add('goleft')
    registerBox.classList.add('goleft')
  }
  //좋아하는 장르 체크 페이지 보이기
  const goCheckBox = () => {
    const registerBox = document.querySelector('.Register')
    const checkBox = document.querySelector('.check-box')
    registerBox.classList.add('goleft2')
    checkBox.classList.add('goleft2')
  }

  //회원가입 확인창 보이기
  let arr = []
  const goresult = () => {
    const checkBox = document.querySelector('.check-box')
    const doneBox = document.querySelector('.done')
    const inputBoxs = document.querySelectorAll('.inputs')

    //장르 체크된것 추출
    inputBoxs.forEach(inputBox => {
      // console.log(inputBox)
      const isChecked = inputBox.firstElementChild.checked
      if(isChecked){
        console.log(inputBox.firstElementChild.value)
        //추출된 장르 데이터에 fetch하여 담기
        return arr.push(inputBox.firstElementChild.value)
      }
    })
    console.log(arr)
    checkBox.classList.add('goleft3') 
    doneBox.classList.add('goleft3')
    return arr
  }
  //왜 리턴을줘도 usestate를써도 값이..저장이안되지...

  //로그인 누르면 홈페이지로 이동
  const navigate = useNavigate()
  const login = () => {
   console.log(arr)
   //  navigate('/home', {state:{userPickGenre}})
  }

  
  //회원가입후 로그인 페이지 보이기
  const goLogin = () => {
    console.log(arr)
    const loginBox = document.querySelector('.Login')
    const registerBox = document.querySelector('.Register')
    const checkBox = document.querySelector('.check-box')
    const doneBox = document.querySelector('.done')
    loginBox.classList.remove('goright')
    loginBox.classList.remove('goleft')
    registerBox.classList.remove('goleft')
    registerBox.classList.remove('goleft2')
    registerBox.classList.remove('goleft3')
    checkBox.classList.remove('goleft')
    checkBox.classList.remove('goleft2')
    checkBox.classList.remove('goleft3')

    doneBox.classList.add('goleft4')
    doneBox.classList.remove('goleft4')
    doneBox.classList.remove('goleft3')

  }
  //이상형월드컵 페이지 다시가기
  const goworldcup = () => {
    navigate('/')
  }
  //로그인정보가 틀리면 빨간색보더로 변경해주기
  //회원가입시 이미 존재하는 이메일이면 input창 벗어났을때 바로 알려주기  
  if(type == 'login'){
    return(
      <div className="Login base">
        <label htmlFor='loginEmail'>
          <p className="labelname">이메일을 입력하세요</p>
          <input onKeyUp={addClass} type='text' id='loginEmail'></input>
        </label>
        <label htmlFor='loginPw'>
          <p className="labelname">비밀번호를 입력하세요</p>
          <input onKeyUp={addClass} type='password' id='loginPw'></input>
        </label>
        <Button btnClass='loginbtn' handleClick={login}>로그인</Button>
        <p className="registerbtn" onClick={goSignup}>아직 회원이 아니신가요?</p>
        <p className="registerbtn" onClick={goworldcup}>이상형 월드컵 다시 하러 가기</p>
      </div>
    )
  }else if(type == 'signup'){
    return(
      <div className="Register base">
        <h3>계정 만들기</h3>
        <label htmlFor='userId'>
          <p className="labelname">아이디를 입력하세요</p>
          <input onKeyUp={addClass} type='text' id='userId'></input>
        </label>
        <label htmlFor='userEmail'>
          <p className="labelname">이메일을 입력하세요</p>
          <input onKeyUp={addClass} type='text' id='userEmail'></input>
        </label>
        <label htmlFor='userPw'>
          <p className="labelname">비밀번호를 입력하세요</p>
          <input onKeyUp={addClass} type='password' id='userPw'></input>
        </label>
        <label htmlFor='userPw2'>
          <p className="labelname">비밀번호를 다시 입력하세요</p>
          <input onKeyUp={addClass} type='password' id='userPw2'></input>
        </label>
        <Button btnClass='loginbtn' handleClick={goCheckBox}>다음</Button>
      </div>
    )
  }else if(type == 'checkBox'){
    // console.log(Genres)
    return(
      <div className="check-box base">
        <h4>좋아하는 장르를 선택해주세요!</h4>
          <div className="input-box">
            {Genres.genres.map((genre,id) => {
              // console.log(genre)
              return(
                <div className="inputs" key={id}>
                  <input type='checkbox' id={genre.name} value={genre.name} onClick={handleClick} defaultChecked={genreLists && genreLists.includes(genre.id) && 'on'}/>
                  <label htmlFor={genre.name}>{genre.name}</label>
                </div>
              )
            })}
          </div>
          <Button btnClass='signupOK' handleClick={goresult}>가입완료하기</Button>
        </div>
    )
  }else if(type == 'done'){
    //백앤드 결과화면으로 회원가입 성공여부 띄워주기
    return(
      <div className="done base">
        <h4>축하합니다! 무드의 회원이 되었습니다.</h4>
        <Button handleClick={goLogin}>로그인 하러 가기</Button>
      </div>
    )
  }
}


export default Form