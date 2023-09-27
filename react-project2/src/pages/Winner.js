import { MotionContext } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import WinnerPlayer from "../components/winnerPlayer"
import Button from "../components/Button";

import '../styles/Winner.css'

import Logo from "../assets/logo.png"


function Winner(){

    const { state: {winner} } = useLocation()
    const [recommendMovies, setRecommendMovies] = useState([])

    useEffect(() => {
        const getFavoriteGenreMovies = async (arr) => {

            const data = await fetch('/api/Tournament.json')
            const res = await data.json()
            const genreCode = []
            res.map((movie) => {
                genreCode.push(movie.code)
            })
            const recommendGenres = []

            const findMovies = (num) => {
                const filterMovies = res.find((movie) => {
                    return movie.code == num
                })
                
                for(let i = 0; i < 3; i++){
                    recommendGenres.push(filterMovies.movies[Math.floor(Math.random() * filterMovies.movies.length)])    
                }

                setRecommendMovies([...recommendGenres])
            }

            if(genreCode.includes(arr[0])){
                findMovies(arr[0])
            }else{
                findMovies(arr[1])
            }
        }
        getFavoriteGenreMovies(winner[0].genre_ids)
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
                    <Button btnClass={"mood-join-btn"}>
                        <img src={Logo} alt="logo"/>
                    </Button>
                    <div className="recommend-movies">
                        {recommendMovies.map((movie) => {
                            console.log(movie)
                            return (
                                <div className="recommend-poster" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="favorite"></div>
                <div className="stats"></div>
            </div>
        </div>
    )
}

export default Winner