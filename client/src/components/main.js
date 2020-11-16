import React, { Component } from 'react';
import './main.css';
import TourIntroHeader from './tourIntroHeader';
import Game from './Game';
import ExplainModal from './Modal';
import {post} from 'axios';
import { withCookies, Cookies} from 'react-cookie';
import { instanceOf } from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

let time = new Date();

var cookieTime = 100;
var cookieTime2 = 10;

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

class main extends Component{
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  state = {
    input : '',
    Finalinput :  '',
    stageAnswer : '',
    area : '',
    hint : '',
    List : [],
    isChange : 0,
    randomNumber:0,
    bottom : false
  }

  async componentDidMount(){
  
    console.log(this.props.cookies)
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
      area : this.props.match.url.split('/')[1], //
      hint : body.hint,
      randomNumber:this.state.List[Math.floor(Math.random() * this.state.List.length)]
    });
    console.log("Main RandomNumber : ",this.state.randomNumber)
    console.log(this.props.cookies.get('time'))
    if(this.props.cookies.get('time') !== undefined){
      document.getElementById('aa').disabled = true;
      console.log(this.props.cookies.get('time'),localStorage.getItem('count'))
      var count = this.props.cookies.get('time') - localStorage.getItem('count')
      console.log(count)
      var timer = setInterval(function(){
        count--;
        localStorage.setItem('count',cookieTime - count)
        console.log(count,localStorage.getItem('count'))
        if(count === 0){
          document.getElementById('aa').disabled = false;
          count = 0;
          localStorage.removeItem("count");
          clearInterval(timer);
        }
      },1000);
    }
    if(this.props.cookies.get('time2') !== undefined){
      console.log(this.props.cookies.get('time2'),localStorage.getItem('count2'))
      var count = this.props.cookies.get('time2') - localStorage.getItem('count2')
      console.log(count)
      var timer = setInterval(function(){
        count--;
        localStorage.setItem('count2',cookieTime2 - count)
        console.log(count,localStorage.getItem('count2'))
        if(count === 0){
  
          count = 0;
          localStorage.removeItem("count2");
          clearInterval(timer);
        }
      },1000);
    }
  }


  handleFormSubmit = async () => {
     this.goStage()
    .then((response) => {
      var data = response.data;
      data['area'] = this.state.area;
      this.props.history.push({
        pathname: '/mission', 
        data :  data}); 
    });
  }

  handleFormSubmit2 = async () => {
    this.goStage2()
   .then((response) => {
     this.props.history.push({
      pathname: '/quiz', 
      data : { area : this.state.area, hint:this.state.hint,comment:document.getElementById('comment').value }
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
    
    if(this.props.cookies.get('time2') !== undefined){
      alert(String(cookieTime2 - localStorage.getItem('count2'))+'초 남았습니다.')
    }
    else if(this.state.input == ''){
      alert('답을 입력하세요!');
    }
    else if(document.getElementById('Question').value === '주관식' && this.props.cookies.get('time2') === undefined){
      if(quizAnswer.indexOf(this.state.input.replace(/(\s*)/g,"")) == -1){
        alert('틀렸습니다!');
        e.preventDefault();
        document.getElementById('quizInput').disabled = true;
        this.props.cookies.set('time2',String(cookieTime2),{maxAge:cookieTime2})
        var a = Number(this.props.cookies.get('time2'));
        var count2 = 0;
        var timer = setInterval(function(){
        a--;
        count2++;
        console.log(a,count2);
        localStorage.setItem('count2',count2)
        if(count2 === cookieTime2){
          localStorage.removeItem("count2");
          document.getElementById('quizInput').disabled = false;
          count2 = 0;
          clearInterval(timer);
        }
      },1000);
      }
      else {
        alert('맞았습니다.');
        this.handleFormSubmit2();
      }
    }
    else if(document.getElementById('Question').value === '객관식'&& this.props.cookies.get('time2') === undefined){
      for(var i = 0; i<document.getElementsByClassName('checking').length;i++){
        if(document.getElementsByClassName('checking')[i].checked){
          this.setState({
            input : document.getElementsByClassName('checking')[i].value
          })
        } 
      }
      if(quizAnswer.indexOf(this.state.input) == -1){
        console.log(document.getElementById('correctAnswer').value)
        alert('틀렸습니다!');
        e.preventDefault();
        for(var i = 0; i<document.getElementsByClassName('checking').length;i++){
          document.getElementsByClassName('checking')[i].disabled = true;
        }   
        this.props.cookies.set('time2',String(cookieTime2),{maxAge:cookieTime2})
        var a = Number(this.props.cookies.get('time2'));
        var count2 = 0;
        for(var i = 0; i<document.getElementsByClassName('checking').length;i++){
          document.getElementsByClassName('checking')[i].disabled = true;
        } 
        var timer = setInterval(function(){
        a--;
        count2++;
        console.log(a,count2);
        localStorage.setItem('count2',count2)
        if(count2 === cookieTime2){
          localStorage.removeItem("count2");
          for(var i = 0; i<document.getElementsByClassName('checking').length;i++){
            document.getElementsByClassName('checking')[i].disabled = false;
          }
          count2 = 0;
          clearInterval(timer);
        }
      },1000);
      }
      else {
        alert('맞았습니다.');
        this.handleFormSubmit2();
      }
    }
  }
  
  StageSuccess = (e) => {
    if(this.state.stageAnswer.indexOf(this.state.FinalInput.replace(/(\s*)/g,"")) == -1 && this.props.cookies.get('time') === undefined){
      alert('틀렸습니다!');
      e.preventDefault();
      document.getElementById('aa').disabled = true;
      this.props.cookies.set('time',String(cookieTime),{maxAge:cookieTime})
      var a = Number(this.props.cookies.get('time'));
      var count = 0;
      var timer = setInterval(function(){
        a--;
        count++;
        localStorage.setItem('count',count)
        if(count === cookieTime){
          localStorage.removeItem("count");
          document.getElementById('aa').disabled = false;
          count = 0;
          clearInterval(timer);
        }
      },1000);
    }
    else if(this.state.stageAnswer.indexOf(this.state.FinalInput.replace(/(\s*)/g,"")) != -1){
      alert('맞았습니다.');
      this.handleFormSubmit();
    }
    else if(this.props.cookies.get('time') !== undefined){
      alert(String(cookieTime - localStorage.getItem('count'))+'초 남았습니다.')
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

  

  render(){
    return (
      <div className="main_container">

        {/* <!-- 관광지 소개 --> */}
        <TourIntroHeader />

        {/* <!-- 퀴즈 정답 입력 --> */}
        <div id="content_answer" className="container">
            <div id="content_quiz">
              <div> {this.state.List.length == 0 ? '게임을 로딩중입니다' : <Game ChangeThis={this.ChangeThis} selectChange={this.selectChange}
                                                                          randomNumber={this.state.randomNumber}/>}</div>
              <div>
              {this.state.isChange ? <div>{
               document.getElementById('Question').value == '주관식'?
               <TextField label="정답" className="submit_input" id="quizInput" type="text"  onChange={(e) => {this.setState({input:e.target.value})}}/>
               : ''
               }</div> :'' }
               </div>
             {/* <p>퀴즈의 정답을 입력해주세요</p> */}
              <button id="quiz_button" name="a" className="submit_button"onClick={this.QuizSuccess}>확인</button> 
            </div>
        </div>
        
        <Fab size="small" color="secondary" aria-label="add" onClick={this.toggleDrawer("bottom", true)}>
          <EditIcon/>
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
              <strong>QR코드를 찾아 문제를 해결하고<br /> 힌트를 모아 4자리 비밀번호를 찾으세요. <br /> 비밀번호를 찾으셨다면 아래 입력창에 입력하세요.</strong>
              <br />
              <input className="submit_input" type="text" id="aa" onChange={this.onChange} />
              <br />
              <Button startIcon={<CheckIcon />} variant="contained" color="secondary" id="mission_button" onClick={this.StageSuccess}>제출</Button>    
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withCookies(main);