import React from "react"
import '../styles/Player.css'

function Player({ player, handleClick, direction }){
    return (
        <div className={`player ${direction === 0 ? 'left' : 'rigth'}`} onClick={handleClick}>
            <div className="player-img" style={{background: `${player.color}`}}></div>
            <div className="player-name">{player.name}</div>
        </div>
    )
}

export default Player