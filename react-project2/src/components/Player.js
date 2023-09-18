import React from "react"
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'


import '../styles/Player.css'

function Player({ player, handleClick, direction, isVisible }){
    
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div

                    className={`player ${direction === 0 ? 'left' : 'right'}`} 
                    onClick={handleClick}
                    key={player.id}

                    LayoutGroup
                    whileTap={{ scale: 1.1 }}
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // exit={{ opacity: 0, y: 20 }}
                >
                    <div className="player-img">
                        <img src={`${player.large_cover_image}`} alt={`${player.title}`}/>
                    </div>
                    <div className="player-name"></div>
                </motion.div>            
            )}
             
        </AnimatePresence>
        
        
    )
}

export default Player