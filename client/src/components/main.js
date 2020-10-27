import React, { Component } from 'react';
import './main.css';
import TourIntroHeader from './tourIntroHeader';
import { Link } from 'react-router-dom';
import Game from './Game';
import ExplainModal from './Modal';

class main extends Component{
  state = {
    quizAnswer : '',
    input : '',
    FinalInput :  '',
    stageAnswer : '',
    area : '',
    hint : '',

  }

  componentDidMount = async () => {
    const response = await fetch(`${this.props.match.url}`,{
      method : 'GET',
      headers : {
        'Content-Type': 'application/json',
      }
    })
    
    const body = await response.json();
    this.setState({
      stageAnswer:body.answer,
      area : body.hint.split(' ')[0],
      hint : body.hint.split(' ')[1]
    });

    console.log(document.getElementById('correctAnswer').value);
  }


  QuizSuccess = (e) => {
    if(document.getElementById('correctAnswer').value !== this.state.input){
      alert('틀렸습니다!');
      e.preventDefault();
      
    }
    else if(this.state.quizAnswer === this.state.input){
      alert('맞았습니다.');
    
    }
    
  }

    StageSuccess = (e) => {
      
      var time = 10;
      if(this.state.stageAnswer !== this.state.Finalinput){
        alert('틀렸습니다!');
        e.preventDefault();
        document.getElementById('aa').disabled = true;
        var timer = setInterval(function(){
          time--;
          if(time === 0){
            clearInterval(timer);
            document.getElementById('aa').disabled = false;
          }
        },1000);
      }
      else{
        alert('맞았습니다.')
      }
    }
 
  render(){

    return (
      <div>

        {/* <!-- 관광지 소개 --> */}
        <TourIntroHeader />
        {/* <!-- 컨텐츠 부분 --> */}
        <div id="content"> </div>
        
        {/* <!-- 컨텐츠 이미지 --> */}
        <div id="content_image_container">
            <img id="content_image" src={require('../images/abcd-01-1.jpg')} alt="이미지"/>
        </div>
        <div>
          <ExplainModal />
        </div>
        {/* <!-- 퀴즈 정답 입력 --> */}
        <div id="content_answer" className="container">
            
            <div id="content_quiz" className="container">
            <div> <Game /></div>
            </div>

            {/* <p>퀴즈의 정답을 입력해주세요</p> */}
            <input className="submit_input" type="text"  onChange={(e) => {this.setState({input:e.target.value})}}/>
            <form >
            <Link to={{
              pathname: '/quiz',
              state:{
                area : this.state.area,
                hint : this.state.hint,
                GameIndex : 2,
              }
            }} onClick={this.QuizSuccess}><button id="quiz_button" name="a"className="submit_button">확인</button></Link>
            </form>
        </div> 

        <hr />

        {/* <!-- 미션 정답 입력 --> */}
        <div className="container">
            <strong>QR코드를 찾아 문제를 해결하고 힌트를 모아, 4자리 비밀번호를 찾으세요. 비밀번호를 찾으셨다면 아래 입력창에 입력하세요.</strong>
            <br />
            <input className="submit_input" type="text" id="aa" onChange={(e) => {this.setState({Finalinput:e.target.value})}} />
            <Link to='/mission' onClick={this.StageSuccess}><button id="mission_button" className="submit_button">제출</button></Link>
        </div>
      </div>
    );
  }
}

export default main;
