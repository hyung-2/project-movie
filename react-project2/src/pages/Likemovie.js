import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/Likemovie.css'
import Nav from '../components/Nav'



function Likemovie(){

  return(
    <div className="Like-moive">
      <Nav></Nav>
      <div className="like-box">
        <div className="like-list-box">
          <div className="like-list">
            <div className="img-box">
              <img src=' http://via.placeholder.com/200x200'></img>
            </div>
            <h4>영화제목</h4>
          </div>
          <div className="like-list">
            <div className="img-box">
              <img src=' http://via.placeholder.com/200x200'></img>
            </div>
            <h4>영화제목</h4>
          </div>
          <div className="like-list">
            <div className="img-box">
              <img src=' http://via.placeholder.com/200x200'></img>
            </div>
            <h4>영화제목</h4>
          </div>
          <div className="like-list">
            <div className="img-box">
              <img src=' http://via.placeholder.com/200x200'></img>
            </div>
            <h4>영화제목</h4>
          </div>
          <div className="like-list">
            <div className="img-box">
              <img src=' http://via.placeholder.com/200x200'></img>
            </div>
            <h4>영화제목</h4>
          </div>
          <div className="like-list">
            <div className="img-box">
              <img src=' http://via.placeholder.com/200x200'></img>
            </div>
            <h4>영화제목</h4>
          </div>
          <div className="like-list">
            <div className="img-box">
              <img src=' http://via.placeholder.com/200x200'></img>
            </div>
            <h4>영화제목</h4>
          </div>
        </div>
        <div className="like-info">

          즐겨찾기 페이지ㅣ<br/>
          db에 영화 제목으로 저장해놓고 영화제목으로 api에서 가져오기<br/>
          likelist를 클릭하면 현재 화면에 아래 정보 표현하기<br/>
          데이터 연동하면 구현<br/>
          ----------------------------------------------------------<br/>
          제목(연도)<br/>
          이미지<br/>
          장르<br/>
          평점<br/>
          상영시간<br/>
          예고편(유투브)<br/>



        </div>
      </div>
    </div>
  )
}



export default Likemovie