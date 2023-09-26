import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import '../styles/MoreGenre.css'
import Nav from '../components/Nav'
import Modal from "../components/Modal";
import Movies from '../components/Movies'
import Button from '../components/Button'

function MoreGenre(){

  const [open, setOpen] = useState(false) 
  const [pickMovie, setPickMovie] = useState({})


  const location = useLocation()
  console.log(location)
  const movieLists = location.state.filter
  console.log(movieLists)


  const pickPoster = (e) => {
    console.log(e.target)
    {movieLists.map((movie, id) => {
      // console.log(movie)
      // console.log(`https://image.tmdb.org/t/p/original/${movie.poster_path}` === e.target.src)
      if(e.target.src === `https://image.tmdb.org/t/p/original/${movie.poster_path}`){
        console.log(movie)
        return setPickMovie(movie)
      }
    })}
    console.log(pickMovie)
    return setOpen(true)
  }

  const close = () => {
    return setOpen(false)
  }

  if(!movieLists){
    return <div>아직 데이터 없음!</div>
  }

  //무한스크롤로 데이터 불러오기
  let offset = 0
  let sliceList = movieLists.slice(offset, offset+10)
  // const showList = []
  //movieLists 10개씩 나누기

  //window로 addEvent하면 다른 컴포넌트에도 적용됨...
  // window.addEventListener('scroll', (e) => {
  //     const scrollHeight = Math.max(
  //       document.body.scrollHeight, document.documentElement.scrollHeight,
  //       document.body.offsetHeight, document.documentElement.offsetHeight,
  //       document.body.clientHeight, document.documentElement.clientHeight
  //     );
  //     console.log(scrollHeight)
  //     console.log(window.pageYOffset)
  //     const moreBox = document.querySelector('.MoreGenre')
  //     console.log(moreBox.clientHeight)

  //     if(scrollHeight - (moreBox.clientHeight + window.pageYOffset) < 160){
  //       console.log('스크롤아래')
  //       console.log(sliceList)
  //       offset = offset + 10
  //       sliceList = movieLists.slice(offset, offset+10)
  //       return sliceList
  //     }
  //   })

  return(
    <div className={`MoreGenre`}>
      <Nav></Nav>
      <h3 className="maintitle">{location.state.title}</h3>
      <Movies movieLists={movieLists} pickPoster={pickPoster}></Movies>
      <Modal type='poster' open={open} pickMovie={pickMovie} close={close}></Modal>
    </div>
  )
}

export default MoreGenre