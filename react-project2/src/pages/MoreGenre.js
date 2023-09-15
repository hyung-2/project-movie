import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './MoreGenre.css'
import Nav from '../component/Nav'
import Modal from "../component/Modal";
import Button from "../component/Button";
import Movies from '../component/Movies'


function MoreGenre(){

  const [open, setOpen] = useState(false) 
  const [pickMovie, setPickMovie] = useState({})
  const [loading, setLoading] = useState(true)

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
    return setOpen(true)
  }

  const close = () => {
    return setOpen(false)
  }

  if(!movieLists){
    return <div>아직 데이터 없음!</div>
  }


  return(
    <div className={`MoreGenre`}>
      <Nav></Nav>
      <h3>{location.state.title}</h3>
      <Movies movieLists={movieLists} pickPoster={pickPoster}></Movies>
      <Modal open={open}>
         {open && (
          <>
            <div className='img-box'>
              <img src={pickMovie.large_cover_image}></img>
            </div>
            <div className="content-box">
              <h2>{pickMovie.title} ({pickMovie && pickMovie.year})</h2>
              <h4>장르: {pickMovie && pickMovie.genres.length !== 0 && pickMovie.genres.join(', ')}</h4>
              <h4>평점: {pickMovie.rating}</h4>
              <p>줄거리: {pickMovie.description_full ? pickMovie.description_full : '생성되지 않은 줄거리'}</p>
            </div>
          </>
         )}
        
        <Button btnClass='closeBtn' handleClick={close}>x</Button>
      </Modal>
    </div>
  )
}

export default MoreGenre