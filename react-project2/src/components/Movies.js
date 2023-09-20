import React from "react";
import '../styles/Movies.css'
import Poster from "../components/Poster";

function Movies({pickPoster, movieLists, }){
  return(
    <>
      <div className="pickPoster">
        {movieLists.map((movie, id) => {
          return(
            <div className="movies" key={id}>
              <Poster key={id} pickPoster={pickPoster} cover={movie.medium_cover_image}></Poster>
              <h2>{movie.title}</h2>
            </div>
            )
        })}
      </div>
    </>
  )
}



export default Movies