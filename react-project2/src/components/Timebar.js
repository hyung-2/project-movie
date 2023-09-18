import React, { useState, useEffect } from "react";
import '../styles/TimeBar.css'

function TimeBar({ counter }){

    const round = [ "16강", "8강", "4강", "결승"]
    const [ roundBar, setRoundBar ] = useState(0)

    const [ sixteen, setSixteen ] = useState(true)
    const [ quarter, setQuarter ] = useState(false)
    const [ semi, setSemi ] = useState(false)
    const [ final, setFinal ] = useState(false)

    useEffect(() => {
        console.log(counter)
        if(counter === 8){
            setQuarter(true)
        }else if(counter === 4){
            setSemi(true)
        }else if(counter === 2){
            setFinal(true)
        }

        if(counter > 8){
            setRoundBar(roundBar + 23.141)
        }else if(counter > 4){
            setRoundBar(roundBar + (23.141 * 2))
        }else if(counter > 2){
            setRoundBar(roundBar + (23.141 * 4))
        }
    }, [counter])

    return (
        <div className="timeBar-container">
            <span>{round[0]}</span>
            
            <div className="point-container">
                <div className={`point start ${sixteen? "active" : ""}`}></div>
                <div className="bar background">
                    <div className="bar round" style={{ width: `${roundBar}px`}}></div>
                </div>
                <div className={`point end ${quarter? "active" : ""}`}></div>
            </div>
        </div>
    )
}

export default TimeBar