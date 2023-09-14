import React,{ Component } from "react";
import './ScrollMovie.css'
import Poster from "./Poster";
import Button from "./Button";

function ScrollMoive({MouseDown, MouseMove, deactive, pickPoster}){


  return(
    <>
      <div className={`ScrollMovie`} onMouseDown={MouseDown} onMouseMove={MouseMove} onMouseLeave={deactive} onMouseUp={deactive}>
        {/* 포스터 누르면 모달창 열고닫기 */}
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
        <Poster pickPoster={pickPoster}></Poster>
      </div>
    </>
  )
}


export default ScrollMoive