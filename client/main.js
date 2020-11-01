import React, { Component } from 'react';
import './main.css';
import TourIntroHeader from './tourIntroHeader';
import { Link } from 'react-router-dom';
import Game from './Game2';
import ExplainModal from './Modal';
import {post,get} from 'axios';



class main extends Component{
  state = {
    quizAnswer : '',
    input : '',
    FinalInput :  '',
    stageAnswer : '',
    area : '',
    hint : '',
    List : [],
  }

  async componentDidMount(){
    const response = await fetch(`${this.props.match.url}`,{
      method : 'GET',
      headers : {
        'Content-Type': 'application/json',
      }
    })
    
    const body = await response.json();
    console.log(body);
    var List2 = body.gameList;
    for(var i = 0; i<body.clearGame.length;i++){
      List2.remove(body.clearGame[i])
    }
    for(var i = 0; i<List2.length;i++){
      this.state.List.push(List2[i]);
    }
    this.setState({
      stageAnswer:body.answer,
      area : body.hint.split(' ')[0],
      hint : body.hint.split(' ')[1],
    });
  }


  handleFormSubmit = async () => {
     this.goStage()
    .then((response) => {
      this.props.history.push({data : response.data}); 
    });
  }

  handleFormSubmit2 = async () => {
    this.goStage2()
   .then((response) => {
     this.props.history.push({data : response.data}); 
   });
 }

  goStage(){
    const url = '/mission';
    var params = {
      quizNumber : this.state.area
    }
    return post(url, params)
  }

  goStage2(){
    const url = '/quiz';
    var params = {
      GameIndex : Number(document.getElementById('correctAnswer').value) - 1
    }
    return post(url, params)
  }
    
    

  QuizSuccess = (e) => {
    if(document.getElementById('correctAnswer').value !== this.state.input){
      console.log(document.getElementById('correctAnswer').value)
      alert('틀렸습니다!');
      e.preventDefault();
      
    }
    else if(document.getElementById('correctAnswer').value === this.state.input){
      alert('맞았습니다.');
      this.handleFormSubmit2();
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
      
      alert('맞았습니다.');
      this.handleFormSubmit();
    }

  }
 
  render(){
    console.log(this.state)
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
            <div> {this.state.List.length == 0 ? '게임을 로딩중입니다' : <Game List = {this.state.List}/>}</div>
            </div>

            {/* <p>퀴즈의 정답을 입력해주세요</p> */}
            <input className="submit_input" type="text"  onChange={(e) => {this.setState({input:e.target.value})}}/>
          
            <Link to={{
              pathname: '/quiz',
              state:{
                area : this.state.area,
                hint : this.state.hint,
                GameIndex : 2,
              }
            }} onClick={this.QuizSuccess}><button id="quiz_button" name="a"className="submit_button">확인</button></Link>
           
        </div> 

        <hr />

        {/* <!-- 미션 정답 입력 --> */}
        <div className="container">
            <strong>QR코드를 찾아 문제를 해결하고 힌트를 모아, 4자리 비밀번호를 찾으세요. 비밀번호를 찾으셨다면 아래 입력창에 입력하세요.</strong>
            <br />
            <input className="submit_input" type="text" id="aa" onChange={(e) => {this.setState({Finalinput:e.target.value})}} />
            <form action="/mission2" method='post'>
            <Link to={{
              pathname: '/mission',
              state:{
                stage : this.state.area,
              }
            }} onClick={this.StageSuccess}><button id="mission_button" className="submit_button">제출</button></Link>
            
                
            </form>
        </div>
      </div>
    );
  }
}

export default main;