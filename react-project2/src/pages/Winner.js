import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Player from "../components/Player";
import '../styles/Winner.css'
import Button from "../components/Button";


function Winner(){

    const { state: {winner} } = useLocation()
    const navigate = useNavigate()
    const gohome = () => {
        navigate('/login')
    }

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
            <Button handleClick={gohome}>추천영화 보러가기</Button>
        </div>
    )
}

export default Winner