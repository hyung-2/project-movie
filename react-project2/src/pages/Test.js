import React from "react";
import{ motion } from "framer-motion"

const containerStyle = {
    width: '700px',
    height: '400px',
    border: '1px solid #333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const cardStyle = {
    width: '300px',
    height: '300px',
    border: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    cursor: 'pointer'
    
}

function Test(){
    return (
        <div className="container" style={containerStyle}>
            <div className="left" style={cardStyle}>Left</div>
            <div className="rigth" style={cardStyle}>Right</div>
        </div>
    )
}

export default Test