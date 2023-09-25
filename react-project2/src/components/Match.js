import React, { useState } from "react";

import Player from "./Player";
import '../styles/Match.css'

function Match({ match, handleClick, isVisible, isMatch }){

    return (
        <div className="match-container" >
            <Player player={match[0]} handleClick={handleClick} direction={0} isVisible={isVisible} isMatch={isMatch}/>
            <Player player={match[1]} handleClick={handleClick} direction={1} isVisible={isVisible} isMatch={isMatch}/>
        </div>
    )
}

export default Match