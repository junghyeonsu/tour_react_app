import React, { Component } from 'react';
import './main.css';
import TourIntro from './tourIntro';
import { Link } from 'react-router-dom';

class main extends Component{
  state = {
    answer : ''
  }

  async componentDidMount(){
    const response = await fetch('/answer/stage',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      }
    })

    const body = await response.text();

    this.setState({
      answer : body
    })
  }
  // 중간에 "클릭" 버튼 눌렀을 때 /api/insert 로 라우팅해줘서 MongoDB와 연결
  onClickButton = async e => {
    const response = await fetch('/api/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ post: this.state.post }),
    });

    const body = await response.text();

    // this.setState({responseToPost: body});
  }
  goSuccess = () => {
    
  }
  render(){
    console.log(this.state);
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
            <Link to='/quiz'><button id="quiz_button" className="submit_button">확인</button></Link>
        </div> 

        <hr />

        {/* <!-- 미션 정답 입력 --> */}
        <div className="container">
            <strong>QR코드를 찾아 문제를 해결하고 힌트를 모아, 4자리 비밀번호를 찾으세요. 비밀번호를 찾으셨다면 아래 입력창에 입력하세요.</strong>
            <br />
            <input className="submit_input" type="text" />
            <button id="mission_button" className="submit_button">제출</button>
        </div>

        {/* 몽고 DB 테스트 하는 곳 */}
        <div className="container">
           <Link to="/api/insert" onClick={this.onClickButton}> 테스트 </Link>
        </div>

        {/* <!-- 관광지 소개 --> */}
        <TourIntro />
      
      </div>
    );
  }
}

export default main;
