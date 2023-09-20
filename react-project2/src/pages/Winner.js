import React from "react";
import { useLocation } from "react-router-dom";
import Player from "../components/Player";
import '../styles/Winner.css'


function Winner(){

    const { state: {winner} } = useLocation()

    return (
        <div className="winner-page">
            <div className="result-container">
                <div className="poster">
                    <Player player={winner[0]} isVisible={true} isMatch={false}/>
                </div>
                <div className="recommend"></div>
                <div className="favorite"></div>
                <div className="stats"></div>
                {console.log(winner)}  
            </div>
        </div>
    )
}

export default Winner