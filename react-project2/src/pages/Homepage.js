import React from "react";
import './Homepage.css'
import Nav from '../component/Nav'
import ScrollMoive from "../component/ScrollMovie";
import Button from "../component/Button";


function Homepage(){

    const scrollbox = document.querySelector('.ScrollMovie')
    let isDown = false
    let startX
    let scrollLeft

      //마우스 클릭
      const mouseDown = (e) => {
        isDown = true
        // console.log(ScrollBox.offsetLeft)
        startX = e.pageX - scrollbox.offsetLeft
        scrollLeft = scrollbox.scrollLeft
      }

      //마우스 드래그
      const mouseMove = (e) => {
      if(!isDown) return
      e.preventDefault()
      const x = e.pageX - scrollbox.offsetLeft
      const walk = x - startX
      scrollbox.scrollLeft = scrollLeft - walk
      }
  
      //마우스가 컨테이너 밖으로 가거나 마우스 클릭을 뗄때
      const deactive = () => {
      isDown = false
      }


    //포스터 클릭
    const pickPoster = (e) => {
      console.log(e.target)
    }
    



  return(
    <div className={`Homepage`}>
      <Nav></Nav>
      <div className={`scroll-box`}>
        {/* ScrollMoive가 두개일때의 문제 = 아래 scroll해도 제일 위의 박스가 스크롤됨  - map안의 함수는 못읽어옴..ㅇ흠 */}
        <h3>장르</h3>
        <div className="box">
          <ScrollMoive
          MouseDown={mouseDown} 
          MouseMove={mouseMove} 
          deactive={deactive} 
          pickPoster={pickPoster}
          ></ScrollMoive>
          <Button>더보기</Button>
          {/* 더보기버튼 누르면 MoreGenre페이지로 이동 */}
        </div>

        <h3>장르</h3>
        <div className="box">
          <ScrollMoive
          MouseDown={mouseDown} 
          MouseMove={mouseMove} 
          deactive={deactive} 
          pickPoster={pickPoster}
          ></ScrollMoive>
          <Button>더보기</Button>
        </div>
      </div>
    </div>
  )
}

export default Homepage