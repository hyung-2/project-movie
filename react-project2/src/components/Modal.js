import React, { Component } from "react";
import Button from "./Button";
import YouTube from 'react-youtube'
import '../styles/Modal.css'

function Modal ({children, open, type, close, pickMovie }){

  //줄거리 열고닫기
  const openP = () => {
    const p = document.querySelector('.content-box div p')
    // console.log(p)
    p.classList.toggle('normalP')
  }
  console.log(open)
  console.log(pickMovie)
  if(type === 'poster' && open){
    return( 
    <div className={`Modal ${open ? 'open' : 'close'}`}>
      <>
               <div className='img-box'>
                  <img src={`https://image.tmdb.org/t/p/original/${pickMovie.poster_path}`}></img>
                </div>
                <div className="content-box">
                  <div className="modal-contents">
                    <h2 className="modal-title">{pickMovie.title} ({pickMovie && pickMovie.release_date.slice(0, 10)})</h2>
                    <h4>장르: {pickMovie.genre_ids.length !== 0 && pickMovie.genre_ids.join(', ')}</h4>
                    {/* <h4>평점: {pickMovie.rating}</h4> */}
                    <p className="modalP normalP" onClick={openP}>줄거리: {pickMovie.overview ? pickMovie.overview : '줄거리가 없습니다.'}</p>
                  </div>
                  {/* <YouTube className='youtube' 
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
                  },}} onReady={(e)=> {e.target.mute()}} /> */}
                </div>
                <Button btnClass='closeBtn' handleClick={close}>x</Button>
            </>  
    </div>
    )
  }else if(type === 'children' && open){
    return <div className={`Modal ${open ? 'open' : 'close'}`}>
      {children}
    </div>
  }
}

export default Modal

Modal.defaultProps = {
  open: false
}