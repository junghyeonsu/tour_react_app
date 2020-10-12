import React, { Component } from 'react';
import './main.css';

class main extends Component{
  render(){
    return (
      <div>
            {/* <!-- 컨텐츠 부분 --> */}
        <div id="content"> </div>

        {/* <!-- 컨텐츠 이미지 --> */}
        <div id="content_image_container">
            <img id="content_image" src={require('../images/abcd-01-1.jpg')} alt="이미지" />
        </div>

        {/* <!-- 퀴즈 정답 입력 --> */}
        <div id="content_answer" className="container">
            {/* <!-- 퀴즈 내는 곳 --> */}
            <div id="content_quiz" className="container">
                quiz
            </div>

            {/* <p>퀴즈의 정답을 입력해주세요</p> */}
            <input className="submit_input" type="text" />
            <button id="quiz_button" className="submit_button">확인</button>
        </div>

        <hr />

        {/* <!-- 미션 정답 입력 --> */}
        <div className="container">
            <strong>QR코드를 찾아 문제를 해결하고 힌트를 모아, 4자리 비밀번호를 찾으세요. 비밀번호를 찾으셨다면 아래 입력창에 입력하세요.</strong>
            <br />
            <input className="submit_input" type="text" />
            <button id="mission_button" className="submit_button">확인</button>
        </div>

        {/* <!-- 관광지 소개 --> */}
        <div>

        </div>

      </div>
    );
  }
}

export default main;
