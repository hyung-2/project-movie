import React from "react";
import './Poster.css'


function Poster({ pickPoster, cover, id, openModal }){
  // console.log(cover)
      return(
        <div className={`Poster`} onClick={pickPoster} key={id}>
          <div className="img-box">
            <img src={cover}></img>
          </div>
        </div> 
      )
      {/* <div className="title">
        타이틀
      </div> */}
  
}

export default Poster