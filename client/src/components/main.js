import React, { Component } from 'react';
import './main.css';
import TourIntroHeader from './tourIntroHeader';
import Game from './Game';
import ExplainModal from './Modal';
import {post} from 'axios';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import LockOpenIcon from '@material-ui/icons/LockOpen';

let time = new Date();

var cookieTime = 100;
var cookieTime2 = 30;

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
var timer1 = 0;
var timer2 = 0; 
class main extends Component{

  state = {
    input : '',
    FinalInput :  '',
    stageAnswer : '',
    stageProblem:'',
    area : '',
    hint : '',
    List : [],
    isChange : 0,
    randomNumber:0,
    bottom : false,
    stageFail : false,
    quizFail : false,
  }

  async componentDidMount(){
    const response = await fetch(`${this.props.match.url}`,{
      method : 'GET',
      headers : {
        'Content-Type': 'application/json',
      }
    })
    const body = await response.json();
    if(body.error){
      this.props.history.push({
        pathname: '/', 
        data:{stage : this.props.match.url.split('/')[1],quiz : this.props.match.url.split('/')[2]}});
        return;
    }
    if(!body.intro){
      this.props.history.push({
        pathname: '/intro', 
        data:{stage : this.props.match.url.split('/')[1],quiz : this.props.match.url.split('/')[2]}}); 
    }
    var List2 = body.gameList;
    console.log("Main List2:",List2);
    for(var i = 0; i<body.clearGame.length;i++){
      const idx = List2.indexOf(body.clearGame[i]) 
      if (idx > -1) List2.splice(idx, 1)
    }
    for(var i = 0; i<List2.length;i++){
      this.setState({
        List: this.state.List.concat(List2[i])
      })

    }
    console.log("Main List:",this.state.List)
    this.setState({
      stageAnswer:body.answer,
      area : this.props.match.url.split('/')[1], 
      stageProblem: body.problem,
      hint : body.hint,
      randomNumber:this.state.List[Math.floor(Math.random() * this.state.List.length)]
    });
    
    console.log("Main RandomNumber : ",this.state.randomNumber);

    if(localStorage.getItem('count') !== null){
      var count = cookieTime - localStorage.getItem('count')
      console.log(count)
      // var timer = setInterval(function(){
        timer1 = setInterval(function(){
        count--;
        localStorage.setItem('count',cookieTime - count)
        console.log("Main stag:",count,localStorage.getItem('count'))
        if(Number(localStorage.getItem('count')) >= 100){
          localStorage.removeItem("count");
          clearInterval(timer1);
        }
      },1000);
    }
    if(localStorage.getItem('count2') !== null){
      console.log(localStorage.getItem('count2'))
      var count2 = cookieTime2 - localStorage.getItem('count2')
      timer2 = setInterval(function(){
        count2--;
        localStorage.setItem('count2',cookieTime2 - count2)
        console.log("Main quiz:",count2,localStorage.getItem('count2'))
        if(count2 <= 0){
          localStorage.removeItem("count2");
          clearInterval(timer2);
        }
      },1000);
    }
  }
  componentWillUnmount(){
    clearInterval(timer1);
  }
  handleFormSubmit = async () => {
     this.goStage()
    .then((response) => {
      var data = response.data;
      data['area'] = this.state.area;
      this.props.history.replace({
        pathname: '/mission', 
        data :  data}); 
    });
  }

  handleFormSubmit2 = async () => {
    this.goStage2()
   .then((response) => {
     this.props.history.replace({
      pathname: '/quiz', 
      data : {area : this.state.area, 
              hint:this.state.hint,
              comment:document.getElementById('comment').value,
              stageAnswer:this.state.stageAnswer,
              stageProblem:this.state.stageProblem }
      }); 
   });
 }

  goStage(){
    const url = '/mission';
    var params = {
      stage : this.state.area
    }
    return post(url, params)
  }

  goStage2(){
    const url = '/quiz';
    var params = {
      GameIndex : this.state.randomNumber
    }
    return post(url, params)
  }

  QuizSuccess = (e) => {
    console.log("Main 원하는 정답 : ",document.getElementById('correctAnswer').value);
    console.log("Main 입력받은 정답 : ",this.state.input);
    console.log("Main 입력받은 정답 : ",this.state.input.replace(/(\s*)/g,""));
    var quizAnswer = document.getElementById('correctAnswer').value.split(',');
    
    if(localStorage.getItem('count2') !== null){
      alert(String(cookieTime2 - localStorage.getItem('count2'))+'초 남았습니다.')
    }
    else if(this.state.input == ''){
      alert('답을 입력하세요!');
    }
    else if(document.getElementById('Question').value === '주관식' && localStorage.getItem('count2') === null){
      if(quizAnswer.indexOf(this.state.input.replace(/(\s*)/g,"")) == -1){
        alert('오답입니다!\n* 30초간 입력이 제한됩니다.');
        e.preventDefault();
        var count2 = 0;
        timer2 = setInterval(function(){
        count2++;
        localStorage.setItem('count2',count2)
        console.log(localStorage.getItem('count2'));
        if(count2 === cookieTime2){
          localStorage.removeItem("count2");
          count2 = 0;
          clearInterval(timer2);
        }
      },1000);

    }
      else {
        alert('정답입니다.');
        this.handleFormSubmit2();
      }
    }
    else if(document.getElementById('Question').value === '객관식'&& localStorage.getItem('count2') === null){
      for(var i = 0; i<document.getElementsByClassName('checking').length;i++){
        if(document.getElementsByClassName('checking')[i].checked){
          this.setState({
            input : document.getElementsByClassName('checking')[i].value
          })
        } 
      }
      if(quizAnswer.indexOf(this.state.input) == -1){
        alert('오답입니다!\n* 30초간 입력이 제한됩니다.');
        e.preventDefault(); 
        var count2 = 0;
        timer2 = setInterval(function(){
        count2++;
        localStorage.setItem('count2',count2)
        console.log(localStorage.getItem('count2'));
        if(count2 === cookieTime2){
          localStorage.removeItem("count2");
          count2 = 0;
          clearInterval(timer2);
        }
      },1000);
      }
      else {
        alert('정답입니다.');
        this.handleFormSubmit2();
      }
    }
  }
  
  StageSuccess = (e) => {
    if(localStorage.getItem('count') !== null){
      alert(String(cookieTime - localStorage.getItem('count'))+'초 남았습니다.')
    }

    else if(this.state.stageAnswer.indexOf(this.state.FinalInput.replace(/(\s*)/g,"")) == -1 && localStorage.getItem('count') === null){
      alert('오답입니다!\n* 100초간 입력이 제한됩니다.');
      e.preventDefault();
      var count = 0;
      timer1 = setInterval(function(){
        count++;
        localStorage.setItem('count',count)
        if(count >= cookieTime){
          localStorage.removeItem("count");
          count = 0;
          clearInterval(timer1);
        }
      },1000);
    }
    else if(this.state.stageAnswer.indexOf(this.state.FinalInput.replace(/(\s*)/g,"")) != -1){
      alert('정답입니다.');
      this.handleFormSubmit();
    }
    else{
      alert('답을 입력하세요!')
    }
  }
  onChange = (e) => {
    this.setState({FinalInput:e.target.value});
  }

  ChangeThis = () => {
    this.setState({
     isChange : 1
    })
  }
  selectChange = (e) => {
    this.setState({
      input : e.target.value
     })
  };

  toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ bottom: open });
  };

  onClickReloadButton = () => {
    this.setState({
        randomNumber: this.state.List[Math.floor(Math.random() * this.state.List.length)]
    });
  }

  render(){
    return (
      <div className="main_container">

        {/* <!-- 관광지 소개 --> */}
        <TourIntroHeader />

        {/* <!-- 퀴즈 정답 입력 --> */}
        <div id="content_answer" className="container">   
          <div id="content_quiz">
            <div> {this.state.List.length == 0 ? '게임을 로딩중입니다' : 
              <Game 
                ChangeThis={this.ChangeThis} 
                selectChange={this.selectChange} 
                randomNumber={this.state.randomNumber}
                onClickReloadButton={this.onClickReloadButton}
              />}
            </div>
            <div>
              {this.state.isChange ? <div>{
              document.getElementById('Question').value == '주관식'?
              <TextField label="정답" className="submit_input" id="quizInput" type="text"  onChange={(e) => {this.setState({input:e.target.value})}}/>
              : ''
              }</div> :'' }
            </div>
              <button id="quiz_button" name="a" className="submit_button"onClick={this.QuizSuccess}>확인</button> 
          </div>
        </div>
        
        <Fab size="small" color="secondary" aria-label="add" onClick={this.toggleDrawer("bottom", true)}>
          <LockOpenIcon/>
        </Fab>
        <ExplainModal/>

        {/* <!-- 미션 정답 입력 --> */}
        <SwipeableDrawer 
          anchor={"bottom"}
          open={this.state.bottom}
          onClose={this.toggleDrawer("bottom", false)}
          onOpen={this.toggleDrawer("bottom", true)}
          disableBackdropTransition={!iOS} 
          disableDiscovery={iOS}
        >  
          <div id="stage_answer" className="container">
              {/* <strong>QR코드를 찾아 문제를 해결하고<br /> 힌트를 모아 4자리 비밀번호를 찾으세요. <br /> 비밀번호를 찾으셨다면 아래 입력창에 입력하세요.</strong> */}
              <strong>
                {this.state.stageProblem == undefined ? this.state.area +"의 알맞은 데이터 암호를 구해라!": this.state.stageProblem}
              <br /> 구역 내 QR코드에 숨겨져 있는 퀴즈를 해결하고  
              <br /> 힌트를 찾아 암호를 완성해줘!!</strong>
              <p>* 오답 입력시 100초간 입력이 제한됩니다.</p>
              <input className="submit_input" type="text" id="aa" onChange={this.onChange} />
              <br />
              <Button startIcon={<CheckIcon />} variant="contained" color="secondary" id="mission_button" onClick={this.StageSuccess}>제출</Button>    
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default main;