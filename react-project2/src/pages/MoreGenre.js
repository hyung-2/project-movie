import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/MoreGenre.css'
import Nav from '../components/Nav'
import Modal from "../components/Modal";
import Button from "../components/Button";
import Movies from '../components/Movies'
import YouTube from 'react-youtube'

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
  //줄거리 열고닫기
  const openP = () => {
    const p = document.querySelector('.content-box div p')
    // console.log(p)
    p.classList.toggle('normalP')
  }

  if(!movieLists){
    return <div>아직 데이터 없음!</div>
  }


  return(
    <div className={`MoreGenre`}>
      <Nav></Nav>
      <h3 className="maintitle">{location.state.title}</h3>
      <Movies movieLists={movieLists} pickPoster={pickPoster}></Movies>
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
                    <p className="modalP normalP" onClick={openP}>줄거리: {pickMovie.description_full ? pickMovie.description_full : '줄거리가 없습니다.'}</p>
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

export default MoreGenre