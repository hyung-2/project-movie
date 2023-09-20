import React from "react"
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'


import '../styles/Player.css'

function Player({ player, handleClick, direction, isVisible, isMatch }){
    
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
                        {isMatch? 
                            <div className="genres-container">
                                <div className="genre">{player.genres[0]}</div>
                                <div className="genre">{player.genres[1]}</div>
                                <div className="genre">{player.genres[2]}</div>
                                <div className="genre">{player.genres[3]}</div>
                                <div className="genre">{player.genres[4]}</div>
                            </div> 
                            : ""
                        }
                                               
                    </div>
                    
                </motion.div>            
            )}
             
        </AnimatePresence>
        
        
    )
}

export default Player