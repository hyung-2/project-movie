import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/MoreGenre.css'
import Nav from '../components/Nav'
import Modal from "../components/Modal";
import Movies from '../components/Movies'


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
      console.log(movie.medium_cover_image === e.target.src)
      if(e.target.src === movie.medium_cover_image){
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

  //나중에 무한스크롤로 데이터 불러오기

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