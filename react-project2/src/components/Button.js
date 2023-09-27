import React, { Component } from "react";
import '../styles/Button.css'

function Button ({children, handleClick, btnClass }){
  return <button className={`button ${btnClass === undefined? "" : btnClass}`} onClick={handleClick} type="button">{children}</button>
}

export default Button