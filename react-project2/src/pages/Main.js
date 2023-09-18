import React from "react";
import { motion } from "framer-motion"

import '../styles/Main.css'

function Main(){
    const variants = {
        start: { strokeDashoffset: 39, fill: "rgba(255, 255, 255, 0)" },
        end: {strokeDashoffset: 0, fill: "rgba(255, 255, 255, 1)" }
    };

    return (
        <div className="main-page">
            <div className="main-text">
                <svg viewBox="0 0 400 500">
                    <motion.text 
                        x="0" y="50"
                        
                        strokeDasharray="39"
                        stroke="#fff"
                        strokeWidth="1px"
                        fontSize="3rem"

                        variants={variants}
                        initial="start"
                        animate="end"
                        transition={{
                            default: { duration: 2 },
                            fill: { duration: 1, delay: 2 }
                        }}
                        
                    >
                        What is your favorite movie ?
                    </motion.text>
                </svg>
            </div>
            
        </div>
        
    )
}

export default Main