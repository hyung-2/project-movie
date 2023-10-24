import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { FiUser } from "react-icons/fi"

import '../styles/Account.css'

import AccountProfile from '../components/AccountProfile'

function Account(){

    const [ userInfo, setUserInfo ] = useState({})
    
    useEffect(() => {
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
        <div className="account-page">
            <Nav></Nav>
            <AccountProfile userInfo={userInfo}/>
        </div>
    )
}

export default Account