import React from "react";
import { motion } from "framer-motion"

import '../styles/Main.css'

function Main(){
    const textContainer = {
        start: { strokeDashoffset: 80, fill: "rgba(255, 255, 255, 0)" },
        end: {
            strokeDashoffset: 0, 
            fill: "rgba(255, 255, 255, 1)",
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5
            }            
         }
    };
    const textContents = {
        start: { strokeDashoffset: 80, fill: "rgba(255, 255, 255, 0)" },
        end: { strokeDashoffset: 0, fill: "rgba(255, 255, 255, 1)"},
    }

    return (
        <div className="main-page">
            <div className="main-text">
                <motion.svg 
                    viewBox="0 0 400 500"

                    variants={textContainer}
                    initial="start"
                    animate="end"
                >
                    <motion.text x="30" y="40" variants={textContents}>
                        What is
                    </motion.text>
                    <motion.text x="30" y="70" variants={textContents}>
                        Your
                    </motion.text>
                    <motion.text x="30" y="100" variants={textContents}>
                        Favorite
                    </motion.text>
                    <motion.text x="30" y="130" variants={textContents}>
                        Movie ?
                    </motion.text>
                </motion.svg>
            </div>
            
        </div>
        
    )
}

export default Main