import React from "react";
import './Movies.css'
import Poster from "./Poster";

function Movies({pickPoster}){
  return(
    <>
      <div className="pickPoster">
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



export default Movies