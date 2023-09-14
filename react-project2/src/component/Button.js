import React, { Component } from "react";
import './Button.css'

function Button ({children, handleClick, btnClass }){
  return <button className={`button ${btnClass}`} onClick={handleClick}>{children}</button>
}

export default Button