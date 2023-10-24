import React,{ useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import YouTube from 'react-youtube'

import '../styles/Homepage.css'
import Genres from '../api/Genres.json'

import Nav from '../components/Nav'
import ScrollMoive from "../components/ScrollMovie";
import Button from "../components/Button";
import Modal from "../components/Modal";
import LoadingPage from "../components/LoadingPage";


function Homepage(){
    
    const [open, setOpen] = useState(false) 
    const [pickMovie, setPickMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const [likeMovieList, setLikeMovieList] = useState([])
    const [randomPick, setRandomPick] = useState()

    const close = () => {
      return setOpen(false)
    }
  
    const [movies, setMovies] = useState([])
    //API가져오기
    useEffect(() => {
      fetch('http://localhost:5201/api/moviesdata/'
      ,{
        method: 'GET',
        headers: {'Content-Type':'application/json'},
      }
      )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const {movies} = data
        console.log(movies)
        setLoading(false)
        setMovies(movies)
      })
    },[])

    const [ usersGenre, setUsersGenre ] = useState([])

    useEffect(() => {
      
      fetch('http://localhost:5201/api/users/check', 
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type':'application/json',
          Authorization: window.localStorage.getItem('accessToken')  
        },
      })
      .then( res => res.json() )
      .then( result => {
        console.log(result)
        setUsersGenre(result.user.likeGenre)
        setLikeMovieList(result.user.likeMovie)
      })
      console.log(likeMovieList)
    }, [])

    //1등영화의 장르가 들어올 배열
    const userPickLists = [...usersGenre]

    console.log(userPickLists)
    const winnerGenres = []

    //장르 번호와 이름 연결
    userPickLists.map(userPickList => {
      // console.log(userPickList)
      Genres.genres.map(genre => {
        // console.log(genre.id)
        if(genre.id == userPickList){
          return winnerGenres.push(genre)
        }
      })
    })
    // console.log(winnerGenres)
    
    const copyMovies = [...movies]

    

    //장르별 객체배열
    const filter = winnerGenres.map(winnerGenre => {
      const filtered = copyMovies.filter((movie) => {
        // console.log(movie)
        return movie.genre_ids.includes(winnerGenre.id)
      })
      return {winnerGenre, filtered}
    })
    console.log(filter)

    //랜덤으로 영화 선택
    const randomPickMoive = () => {
      if(randomPick === undefined){
        console.log('함수실행')
        const random = Math.floor(Math.random() * filter[0].filtered.length)
        console.log(random)
        console.log(filter[0].filtered[random])
        filter[0].filtered[random].video_path.length !== 0 && setRandomPick(filter[0].filtered[random])  
      }
    }



    console.log(randomPick)


    //더보기 버튼 클릭
    const navigate = useNavigate()
    const movePage = (e) => {
      console.log('더보기클릭')
      console.log(e.target.parentElement.previousElementSibling.innerHTML)
      filter.map(filter => {
        // console.log(filter)
        // console.log(filter.winnerGenre.name)
        // console.log(filter.winnerGenre.name == e.target.parentElement.previousElementSibling.innerHTML)
        if(filter.winnerGenre.name == e.target.parentElement.previousElementSibling.innerHTML){
          console.log(filter)
          window.scrollTo({top:0})
          navigate(`/more`, {state: {filter: filter.filtered, title: filter.winnerGenre.name, likeMovieList: likeMovieList}})    
        }
      })
    }

    //포스터 클릭
    const pickPoster = (e) => {
      // console.log(e.target)
      // console.log(filter.filtered)
      {filter.map((filterMovie, id) => {
        filterMovie.filtered.map(movie => {
          // console.log(`https://image.tmdb.org/t/p/original/${movie.poster_path}` === e.target.src)
          if(`https://image.tmdb.org/t/p/original/${movie.poster_path}` === e.target.src){
            // console.log(movie)
            return setPickMovie(movie)
          }
        })
      })}
      console.log(pickMovie)
      return setOpen(true)
    }


    if(loading){
      //로딩화면
      return <LoadingPage/>
    }else{
      return(
        <div className={`Homepage`}  onLoad={randomPickMoive}>
          <Nav></Nav>
          
          <div className="main-movie">
            <div className="main-movieInfo">
              <h2>{randomPick && randomPick.title}</h2>
              <h4>{randomPick && randomPick.release_date.slice(0, 10)}</h4>
            </div>
            <div className="dummy"></div>
            <div className="main-videoBox">
              {randomPick && randomPick.video_path[0] && 
                <YouTube className='mainyoutube' 
                videoId={randomPick && randomPick.video_path[0].key} 
                opts={{
                  width: '100%', height: '100%',
                  playerVars: {
                    autoplay: 1, //자동 재생 여부 
                    fs:0, //전체화면버튼없앰
                    disablekb:1, //키보드조작막기
                    controls:0, //동영상컨트롤 표시 x
                    modestbranding: 1,
                  },}} onReady={(e)=> {e.target.mute()}} />
              }
            </div>
          </div>
          
            {/* 코드중복있어서 나중에 수정 */}
            {winnerGenres.map((winnerGenre, id) => {
              return (
                <div key={id} className={`scroll-box`}>
                  <h3>{winnerGenre.name}</h3>
                  <div className="box">
                    <ScrollMoive
                    movies={
                      copyMovies.filter((movie) => {
                        return movie.genre_ids.includes(winnerGenre.id)
                      })
                    }
                    pickPoster={pickPoster}
                    ></ScrollMoive>
                    <Button btnClass='moreBtn' handleClick={movePage}>more</Button>
                  </div>
                </div>
              )
            })}
        
            
          <Modal type='poster' open={open} close={close} pickMovie={pickMovie} size='posterSize' likeMovieList={likeMovieList}>
          </Modal>
          
        </div>
      )

    }
}

export default Homepage