import React, { useState,useEffect } from "react";
import '../styles/Tournament.css'
import Player from "../components/Player";

import playerList from "../api/playerList";

function Tournament(){

    const [ match, setMatch ] = useState([])
    const [ movies, setMovies ] = useState([])
    const [ winners, setWinners ] = useState([])

    useEffect(() => {
        setMovies([...playerList])
        setMatch([playerList[0], playerList[1]])
    }, [])


    const selectMovie = (player) => () => { 
        if(movies.length > 2){
            setWinners([...winners, player])
            setMovies(movies.slice(2))
            setMatch([movies[2], movies[3]])
        }else if( movies.length <= 2 ){
            let updatedMovies = [...winners, player]
            setWinners([...winners, player])
            setMatch([movies[0], movies[1]])
            console.log(updatedMovies)
        }
    }


    return (
        <>
            <h1>토너먼트</h1>
            <div className="match-container">
            {match.map((player, id) => {
                return (
                    <Player 
                        player={player} 
                        key={id} 
                        direction={id}
                        handleClick={selectMovie(player)}
                    />
                )
            })}
            </div>
        </>
        
    )
}

export default Tournament