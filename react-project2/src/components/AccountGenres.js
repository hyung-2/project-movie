import React, { useEffect, useState } from "react";
import Genres from '../api/Genres.json'

import Button from './Button'

function AccountGenres({ handleClick, userInfo }){

    const [checked, setChecked] = useState(userInfo.likeGenre)
    
    useEffect(() => {
        console.log(userInfo)
        
        if(userInfo.likeGenre !== undefined){
            // console.log(userInfo.likeGenre)
            const genreCheckBoxes = document.querySelectorAll('.account-page .inputs input')
            genreCheckBoxes.forEach((checkBox) => {
                if(userInfo.likeGenre.includes(checkBox.value)){
                    checkBox.checked = true
                }
            })
        }
       
    }, [userInfo])

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
        console.log(userInfo)
        const inputBoxs = document.querySelectorAll('.inputs')
        //장르 체크된것 추출
        
        inputBoxs.forEach(inputBox => {
          //체크되어 들어온 장르 미리 배열에 담기
          const isChecked = inputBox.firstElementChild.checked
          // console.log(isChecked)
          if(isChecked){
            // console.log(inputBox.firstElementChild.value)
            arr.indexOf(inputBox.firstElementChild.value) == -1 && arr.push(inputBox.firstElementChild.value)
            console.log(arr)
            return setChecked(arr)
          }
          console.log(checked)
        })
        return checked
      }

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
            <Button btnClass='signupOK' handleClick={changeUserInfo}>다음</Button>
        </div>
    )
}

export default AccountGenres