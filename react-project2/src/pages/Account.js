import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { FiUser } from "react-icons/fi"

import '../styles/Account.css'

import AccountProfile from '../components/AccountProfile'
import AccountGenres from '../components/AccountGenres'
import Form from '../components/Form'

function Account(){

    const [ userInfo, setUserInfo ] = useState({})
    const [ newUserInfo, setNewUserInfo ] = useState({})

    console.log('새로운정보:',newUserInfo)

    useEffect(() => {

        const formCon = document.querySelector('.form')
        formCon.classList.add('show')

        fetch('http://localhost:5201/api/users/check', 
        {
            method: 'GET',
            credentials: 'include',
            headers: {
            'Content-Type':'application/json',
            Authorization: window.localStorage.getItem('accessToken')  
            },
        })
        .then( res => res.json() )
        .then( result => {
            console.log(result)
            setUserInfo(result.user)
        })

    }, [])


    console.log(userInfo)

    return (
        <>
          <Nav userInfo={userInfo}></Nav>
          <div className="form">
            <AccountProfile userInfo={userInfo} newUserInfo={newUserInfo} setNewUserInfo={setNewUserInfo}/>
            <AccountGenres userInfo={userInfo}/>
            {/* <Form type='signup'></Form> */}
          </div>
        </>
    )
}

export default Account