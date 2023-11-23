import React, { useEffect, useState } from "react";
import Genres from '../api/Genres.json'

import Button from './Button'

function AccountGenres({ handleClick, userInfo }){

    console.log(userInfo.likeGenre)
    const [checked, setChecked] = useState(userInfo.likeGenre)
    const [disabled, setDisabled] = useState(true)


    //이전버튼
    const goProfile = () => {
      const userProfileCon = document.querySelector('.user-profile')
      const userGenreCom = document.querySelector('.user-likes')

      userProfileCon.classList.remove('toleft')
      userGenreCom.classList.remove('toleft')

    }

    //프로필 수정 버튼
    const changeUserInfo = () => {
        console.log('프로필수정')
        console.log(checked)
    }

    let arr = []
    const checkInputs = () => {
        // console.log(userInfo)
        const inputBoxs = document.querySelectorAll('.inputs')
        //장르 체크된것 추출
        
        inputBoxs.forEach(inputBox => {
            // console.log(inputBox)
          //체크되어 들어온 장르 미리 배열에 담기
          const isChecked = inputBox.firstElementChild.checked
          // console.log(isChecked)
          if(isChecked){
            // console.log(inputBox.firstElementChild.value)
            arr.indexOf(inputBox.firstElementChild.value) == -1 && arr.push(inputBox.firstElementChild.value)
            // console.log(arr)
            return setChecked(arr)
          }
        //   console.log(checked)
        })
        return checked
    }

    useEffect(() => {
        // userInfo.likeGenre && userInfo.likeGenre.length >= 3 ? setDisabled(false) : setDisabled(true) 
        // ||
        arr && arr.length >= 3 ? setDisabled(false) : setDisabled(true)
    },[arr])

    console.log(arr)
    console.log(checked)


    
    return (
        <div className="user-likes">
            <h4>좋아하는 장르를 3개 이상 선택해주세요!</h4>
            <div className="input-box">
            {Genres.genres.map((genre,id) => {
                // console.log(genre.id,'-', checked && checked.includes(`${genre.id}`))
                return (
                    <div className="inputs" key={id}>
                        <input type='checkbox' name='genre' id={genre.name} value={genre.id} onClick={checkInputs} defaultChecked={userInfo.likeGenre && userInfo.likeGenre.includes(`${genre.id}`) && 'on'}/>
                        <label htmlFor={genre.name}>{genre.name}</label>
                    </div>
                )
            })}
            </div>
            <Button btnClass='signupOK' handleClick={goProfile}>이전</Button>
            <Button btnClass='signupOK' handleClick={changeUserInfo} disabled={disabled}>다음</Button>
        </div>
    )
}

export default AccountGenres