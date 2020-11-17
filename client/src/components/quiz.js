import React, { Component } from "react";
import TourIntroHeader from "./tourIntroHeader";
import "./quiz.css";
import {post} from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies} from 'react-cookie';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
var cookieTime = 100;

class Quiz extends Component {
  _isMounted = false;
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  state = {
    comment: "",
    area: "",
    hint: "",
    FinalInput: "",
    stageProblem: "",
    stageAnswer: "",
    bottom: false,
  };
  componentDidMount = () => {
    this._isMounted = true;
    if (this.props.location.data != undefined) {
      if (this._isMounted == true) {
        this.setState({
          comment: this.props.location.data.comment,
          area: this.props.location.data.area,
          hint: this.props.location.data.hint,
          stageAnswer: this.props.location.data.stageAnswer,
          stageProblem: this.props.location.data.stageProblem,
        });
        if(localStorage.getItem('count') !== null){
          var count = cookieTime - localStorage.getItem('count')
          console.log(count)
          var timer = setInterval(function(){
            count--;
            localStorage.setItem('count',cookieTime - count)
            console.log(count,localStorage.getItem('count'))
            if(count === 0){
              localStorage.removeItem("count");
              clearInterval(timer);
            }
          },1000);
        }
      }
    } else {
      this._isMounted = false;
      this.props.history.replace({
        pathname: "/",
      });
    }
    
  };

  onChange = (e) => {
    this.setState({ FinalInput: e.target.value });
  };
  goStage(){
    const url = '/mission';
    var params = {
      stage : this.state.area
    }
    return post(url, params)
  }
  handleFormSubmit = async () => {
    this.goStage().then((response) => {
      var data = response.data;
      data["area"] = this.state.area;
      this.props.history.replace({
        pathname: "/mission",
        data: data,
      });
    });
  };
  componentWillUnmount() {
    this._isMounted = false;
  }
  toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ bottom: open });
  };
  StageSuccess = (e) => {
    if(localStorage.getItem('count') !== null){
      alert(String(cookieTime - localStorage.getItem('count'))+'초 남았습니다.')
    }

    else if(this.state.stageAnswer.indexOf(this.state.FinalInput.replace(/(\s*)/g,"")) == -1 && localStorage.getItem('count') === null){
      alert('틀렸습니다!');
      e.preventDefault();
      var count = 0;
      var timer = setInterval(function(){
        count++;
        localStorage.setItem('count',count)
        if(count === cookieTime){
          localStorage.removeItem("count");
          count = 0;
          clearInterval(timer);
        }
      },1000);
    }
    else if(this.state.stageAnswer.indexOf(this.state.FinalInput.replace(/(\s*)/g,"")) != -1){
      alert('맞았습니다.');
      this.handleFormSubmit();
    }
    else{
      alert('답을 입력하세요!')
    }
  }
  render() {
    if (this._isMounted) {
      const { comment, area, hint, stageProblem } = this.state;
      return (
        <div className="hint_container">
          <div id="explain">
            <div id="QuizExplain">
              {comment == "" ? "" : <div>해설: {comment}</div>}
            </div>
            <div id="content_quiz2" className="container">
              <p>{area} 구역의 힌트는</p>
              <span id="hintAnswer">{hint}</span>입니다.
            </div>
          </div>
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={this.toggleDrawer("bottom", true)}
          >
            <EditIcon />
          </Fab>
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
                {this.state.stageProblem == undefined
                  ? area + "의 알맞은 데이터 암호를 구해라!"
                  : stageProblem}
                <br /> 구역 내 QR코드에 숨겨져 있는 퀴즈를 해결하고
                <br /> 힌트를 찾아 암호를 완성해줘!!
              </strong>
              <br />
              <input
                className="submit_input" type="text" id="stageAnswerInput" onChange={this.onChange}/>
              <br />
              <Button
                startIcon={<CheckIcon />}
                variant="contained"
                color="secondary"
                id="mission_button"
                onClick={this.StageSuccess}
              >
                제출
              </Button>
            </div>
          </SwipeableDrawer>
          <div id="bottom">
            <TourIntroHeader />
          </div>
        </div>
      );
    } else {
      return <div>Error</div>;
    }
  }
}

export default withCookies(Quiz);
