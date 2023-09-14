import React from "react";
import './MoreGenre.css'
import Nav from '../component/Nav'
import Modal from "../component/Modal";
import Button from "../component/Button";
import Movies from '../component/Movies'
function MoreGenre(){

  return(
    <div className={`MoreGenre`}>
      <Nav></Nav>
      장르 별 페이지
      <Movies></Movies>
      <Modal>
        <div className='img-box'>
          <img src='http://via.placeholder.com/200x200'></img>
        </div>
        <div className="content-box">
          <h2>제목 (2023)</h2>
          <h4>평점</h4>
          <p>줄거리</p>
          <span>관객수</span>
        </div>
        <Button btnClass='closeBtn'>X</Button>
      </Modal>
    </div>
  )
}

export default MoreGenre