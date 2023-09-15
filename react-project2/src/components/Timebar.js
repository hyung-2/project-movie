import React from "react";
import '../styles/TimeBar.css'

function TimeBar(){
    return (
        <div className="timeBar-container">
            <div className="bar"></div>
            <div className="point-container">
                <div className="point 16"></div>
                <div className="point 8"></div>
                <div className="point 4"></div>
                <div className="point 2"></div>
            </div>
        </div>
    )
}

export default TimeBar