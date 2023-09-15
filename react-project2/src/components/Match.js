import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

import Player from "./Player";
import '../styles/Match.css'

function Match({ match, handleClick }){

    return (
        <motion.div 
            className="match-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <Player player={match[0]} handleClick={handleClick} direction={0}/>
            <Player player={match[1]} handleClick={handleClick} direction={1}/>
        </motion.div>
    )
}

export default Match