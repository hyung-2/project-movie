import React, { useState } from "react";

import Player from "./Player";
import '../styles/Match.css'

function Match({ match, handleClick, isVisible }){

    return (
        <div className="match-container" >
            <Player player={match[0]} handleClick={handleClick} direction={0} isVisible={isVisible}/>
            <Player player={match[1]} handleClick={handleClick} direction={1} isVisible={isVisible}/>
        </div>
    )
}

export default Match