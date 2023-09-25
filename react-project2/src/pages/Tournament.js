import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Match from "../components/Match";
import Player from "../components/Player";
import TimeBar from "../components/Timebar";

import '../styles/Tournament.css'

const playerList = []

function Tournament(){
    

    const [ loading, setLoading ] = useState(false)
    const [ isVisible, setIsVisible ] = useState(true)

    const [ match, setMatch ] = useState([])
    const [ movies, setMovies ] = useState([])
    const [ winners, setWinners ] = useState([])

    const [ winner, setWinner ] = useState([])
    const [ counter, setCounter ] = useState(16)

    useEffect(() => {
        
        if(!loading){
            fetch('https://yts.mx/api/v2/list_movies.json?limit=16')
            .then( res => res.json())
            .then( result => {
                const { data: { movies }} = result
                console.log(movies)
                movies.map((movie) => {
                    playerList.push(movie)
                    return movie
                })
                
            }).then(() => setLoading(true))
        }else{
            playerList.sort(() => Math.random() - 0.5)
            setMovies([...playerList])
            setMatch([playerList[0], playerList[1]])
        }
        
    }, [loading])

    const selectMovie = (e) => { 

        const name = e.target.className
        const parentName = e.target.parentElement.className
        const grandName = e.target.parentElement.parentElement.className

        setIsVisible(false)
        setCounter(counter - 1)

        if(name.includes('left') || parentName.includes('left') || grandName.includes('left')){
            changeMatch(match[0])
        }else if(name.includes('right') || parentName.includes('right') || grandName.includes('right')){
            changeMatch(match[1])
        }
    }

    const changeMatch = (player) => {
        
        if(movies.length > 2){
            setWinners([...winners, player])
            setMovies(movies.slice(2))
            setMatch([movies[2], movies[3]])
        }else if( movies.length <= 2 ){

            if(winners.length === 0){
                setWinner([player])
                setIsVisible(true)
            }else{
                let updatedMovies = [...winners, player]
                updatedMovies.sort(() => Math.random() - 0.5)
                setMatch([updatedMovies[0], updatedMovies[1]])
                setMovies(updatedMovies)
                setWinners([])
            }
        }
    }

    useEffect(() => {
        setIsVisible(true)
    }, [match])

    const navigate = useNavigate()
    const moveToResult = () => navigate('/result', { state: {winner} })

    useEffect(() => {
        if(winner.length === 1){
            setTimeout(moveToResult, 3000)
        }

    }, [winner])

    return (
        <div className="tournament-page">
            
            {match.length === 0 ? "" : 
                counter < 2 ?            
                <div className="winner">
                    <Player player={winner[0]} isVisible={true} isMatch={false}/>
                </div>
                :
                <>
                    <TimeBar counter={counter}/>
                    <Match 
                        match={match} 
                        handleClick={selectMovie}
                        isVisible={isVisible}
                        isMatch={true} 
                    />    
                </>
                
            }
            
        </div>
        
    )
}

export default Tournament