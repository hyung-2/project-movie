import React, { Component } from "react";
import './Modal.css'

function Modal ({children, open }){
 return <div className={`Modal ${open ? 'open' : 'close'}`}>{children}</div>
}

export default Modal

Modal.defaultProps = {
  open: false
}