import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import '../styles/Homepage.css'
import Nav from '../components/Nav'
import ScrollMoive from "../components/ScrollMovie";
import Button from "../components/Button";
import Modal from "../components/Modal";
import YouTube from 'react-youtube'


function Homepage(){
  //각 박스에서 스크롤 구현하기
    
    const [open, setOpen] = useState(false) 
    const [pickMovie, setPickMovie] = useState({})
    const [loading, setLoading] = useState(true)
    //나중에 로딩중화면 설정해주기

    

    const close = () => {
      return setOpen(false)
    }
  
    const [movies, setMovies] = useState([])
    //API가져오기
    useEffect(() => {
      fetch('https://yts.mx/api/v2/list_movies.json?limit=50')
      .then(res => res.json())
      .then(data => {
        const {data: {movies}} = data
        console.log(movies)
        setLoading(false)
        setMovies(movies)
      })
    },[])
    
    //추후 1등영화의 장르가 들어올 배열
    const test = ['Action', 'Crime', 'Drama', 'Horror', "Romance"]

    
    const copyMovies = [...movies]

    //장르별 객체배열
    const filter = test.map(test => {
      const filtered = copyMovies.filter((movie) => {
        return movie.genres.includes(test)
      })
      return {test, filtered}
    })
    console.log(filter)

    //더보기 버튼 클릭
    const navigate = useNavigate()
    const movePage = (e) => {
      console.log('더보기클릭')
      console.log(e.target.parentElement.previousElementSibling.innerText)
      filter.map(filter => {
        console.log(filter.test === e.target.parentElement.previousElementSibling.innerText)
        if(filter.test === e.target.parentElement.previousElementSibling.innerText){
          console.log(filter)
          navigate(`/more`, {state: {filter: filter.filtered, title: filter.test}})    
        }
      })
    }

    //포스터 클릭
    const pickPoster = (e) => {
      console.log(e.target)
      console.log(filter.filtered)
      {filter.map((filterMovie, id) => {
        filterMovie.filtered.map(movie => {
          console.log(movie.medium_cover_image === e.target.src)
          if(e.target.src === movie.medium_cover_image){
            // console.log(movie)
            return setPickMovie(movie)
          }
        })
      })}
      console.log(pickMovie)
      return setOpen(true)
    }
    if(loading){
      const textContainer = {
        start: { strokeDashoffset: 50, fill: "rgba(255, 255, 255, 0)" },
        end: {
            strokeDashoffset: 0, 
            fill: "rgba(255, 255, 255, .7)",
            transition: {
                when: "beforeChildren",
                staggerChildren: .5
            }            
         }
      };
      const textContents = {
        start: { x: 1, fill: "rgba(255, 255, 255, 0)" },
        end: { x: 0, fill: "rgba(255, 255, 255, 1)"}
      }
      return (
        <div className="loading">
          
          <motion.svg 
                    viewBox="0 0 300 300"
                    width="30rem"
                    height="30rem"

                    variants={textContainer}
                    initial="start"
                    animate="end"
                    strokeWidth=".7"
                    transition={{ default: { duration: 0.1 }}}
                    
                >
                    <motion.text x="0" y="160" variants={textContents}>L</motion.text>
                    <motion.text x="42" y="160" variants={textContents}>o</motion.text>
                    <motion.text x="83" y="160" variants={textContents}>a</motion.text>
                    <motion.text x="125" y="160" variants={textContents}>d</motion.text>
                    <motion.text x="166" y="160" variants={textContents}>i</motion.text>
                    <motion.text x="185" y="160" variants={textContents}>n</motion.text>
                    <motion.text x="226" y="160" variants={textContents}>g</motion.text>
                    
                </motion.svg>
        </div>
      )
    }else{
      return(
        <div className={`Homepage`}>
          <Nav></Nav>
          
          
            {/* 코드중복있어서 나중에 수정 */}
            {test.map((test, id) => {
              return (
                <div key={id} className={`scroll-box`}>
                  <h3>{test}</h3>
                  <div className="box">
                    <ScrollMoive
                    movies={
                      copyMovies.filter((movie) => {
                        return movie.genres.includes(test)
                      })
                    }
                    pickPoster={pickPoster}
                    ></ScrollMoive>
                    <Button btnClass='moreBtn' handleClick={movePage}>더보기</Button>
                  </div>
                </div>
              )
            })}
        
            
          <Modal open={open}>
           {open && (
            <>
               <div className='img-box'>
                  <img src={pickMovie.large_cover_image}></img>
                </div>
                <div className="content-box">
                  <div>
                    <h2>{pickMovie.title} ({pickMovie && pickMovie.year})</h2>
                    <h4>장르: {pickMovie.genres.length !== 0 && pickMovie.genres.join(', ')}</h4>
                    <h4>평점: {pickMovie.rating}</h4>
                    <p>줄거리: {pickMovie.description_full ? pickMovie.description_full : '줄거리가 없습니다.'}</p>
                  </div>
                  <YouTube className='youtube' 
                    videoId={pickMovie.yt_trailer_code} 
                    opts={{
                    width: '100%',
                    playerVars: {
                    autoplay: 1, //자동 재생 여부 
                    loop: 1, //반복 재생
                    fs:0, //전체화면버튼없앰
                    disablekb:1, //키보드조작막기
                    controls:0, //동영상컨트롤 표시 x
                    modestbranding: 1,
                    //안먹히는기분
                  },}} onReady={(e)=> {e.target.mute()}} />
                </div>
            </>
           )}
          
          <Button btnClass='closeBtn' handleClick={close}>x</Button>
          </Modal>
          
        </div>
      )

    }
}

export default Homepage