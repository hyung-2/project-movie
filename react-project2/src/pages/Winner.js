import { MotionContext } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi"
import { motion } from "framer-motion"

import WinnerPlayer from "../components/winnerPlayer"
import Button from "../components/Button";

import '../styles/Winner.css'
import Logo from "../assets/logo.png"


function Winner(){

    const { state: {winner, result: winnerMoviesGenre } } = useLocation()
    const navigate = useNavigate()
    const gohome = () => {
        navigate('/login')
    }
    const [recommendMovies, setRecommendMovies] = useState([])

    useEffect(() => {
        const getFavoriteGenreMovies = async (win) => {

            const data = await fetch('/api/Tournament.json')
            const res = await data.json()
            const genreCode = []
            res.map((movie) => {
                genreCode.push(movie.code)
            })
            const recommendGenres = []

            const findMovies = () => {
                console.log(winnerMoviesGenre)
                const filterMovies = [...winnerMoviesGenre]
                const indices = []
                while(indices.length < 3){
                    let index = Math.floor(Math.random() * filterMovies[0].movies.length)
                    if(!indices.includes(index)){
                        indices.push(index)
                    }
                }
                console.log(filterMovies)
                for(let i = 0; i < 3; i++){
                    recommendGenres.push(filterMovies[0].movies[indices[i]])    
                }

                setRecommendMovies([...recommendGenres])
            }
            findMovies()

            const results = await fetch('http://127.0.0.1:5201/api/result'
            ,{
                method: 'GET',
                headers: {'Content-Type':'application/json'},
            })
            const resultsRes = await results.json()
        }
        getFavoriteGenreMovies(winner[0])
    }, [])


    return (
        <div className="winner-page">
            <div className="result-container">
                <div className="poster">
                    <WinnerPlayer player={winner[0]} isVisible={true}/>
                </div>

                <div className="recommend">
                    <div className="recommend-header">
                        <h2>추천 영화</h2>
                    </div>

                    <div className="recommend-movies">
                        {recommendMovies.map((movie) => {
                            return (
                                <div className="recommend-poster" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                                </div>
                            )
                        })}
                    </div>                    
                </div>
                <div className="move-to-login">
                    <h3 className="mood-join-msg">더 많은 영화를 보고싶다면 <BiRightArrowAlt/></h3>
                    <motion.button className="mood-join-btn" onClick={gohome}>
                        <img src={Logo} alt="logo"/>
                    </motion.button>
                </div>
                <div className="favorite">
                    <h2 className="favorite-msg"></h2>
                    <div className="favorite-genre"></div>
                </div>
                <div className="stats"></div>
            </div>
        </div>
    )
}

export default Winner