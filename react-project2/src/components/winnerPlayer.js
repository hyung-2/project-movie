import React from "react"
import { motion, AnimatePresence } from 'framer-motion'

import '../styles/Player.css'

function WinnerPlayer({ player, handleClick, direction, isVisible, className }){
    console.log(player)
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div

                    className={`player ${direction === 0 ? 'left' : 'right'} ${className === undefined? "" : className}`} 
                    onClick={handleClick}
                    key={player.id}

                    LayoutGroup
                    // initial={{ opacity: 0, y: 20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // exit={{ opacity: 0, y: 20 }}
                >
                    <div className="player-img">
                        <img src={`https://image.tmdb.org/t/p/original/${player.poster_path}`} alt={`${player.title}`}/>                                           
                    </div>
                    
                </motion.div>            
            )}
             
        </AnimatePresence>
        
        
    )
}

export default WinnerPlayer