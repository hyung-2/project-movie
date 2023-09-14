import React from "react";
import './Poster.css'


function Poster({ pickPoster }){
  return(
    <div className={`Poster`} onClick={pickPoster}>
      <div className="img-box">
        <img src='http://via.placeholder.com/200x200'></img>
      </div>
      {/* <div className="title">
        타이틀
      </div> */}
    </div>
  )
}

export default Poster