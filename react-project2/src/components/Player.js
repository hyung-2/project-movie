import React from "react"
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'


import '../styles/Player.css'

function Player({ player, handleClick, direction }){
    
    return (
        <AnimatePresence>
            <motion.div
                LayoutGroup
                whileTap={{ scale: 1.1 }}
                className={`player ${direction === 0 ? 'left' : 'right'}`} 
                onClick={handleClick}
            >
                <div className="player-img">
                    <img src={`${player.large_cover_image}`} alt={`${player.title}`}/>
                </div>
                <div className="player-name"></div>
            </motion.div> 
        </AnimatePresence>
        
        
    )
}

export default Player