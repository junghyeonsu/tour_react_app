import React, {Component} from 'react';
import './adminStageAddForm.css';
import { inject, observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AdminStageAddForm extends Component {

    state = {
      name : "",
      hint : "",
      mission : "",
      answer : "",
      comment:"",
      problem:"",
    }

    onClickInsertButton = async e => {
      const {name, hint, mission, answer,comment,problem} = this.state;
        e.preventDefault();
        const response = await fetch('/api/setStageInfo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            /* server에서 받을 때는 req.body.stageName 이런식으로 접근가능 */
            stageName : name,
            stageHint : hint,
            stageMission : mission,
            stageAnswer : answer,
            stageComment: comment,
            stageProblem:problem,
           }),
        }).then(
          window.location.reload()
        );
      }
    
    onChangeName = (e) => {
      this.setState({
        name : e.target.value
      })
    }

    onChangeHint = (e) => {
      this.setState({
       hint : e.target.value
      })
    }

    onChangeMission = (e) => {
      this.setState({
        mission : e.target.value
      })
    }

    onChangeAnswer = (e) => {
      this.setState({
        answer : e.target.value
      })
    }

    onChangeComment = (e) => {
      this.setState({
        comment : e.target.value
      })
    }
    onChangeProblem = (e) => {
      this.setState({
        problem : e.target.value
      })
    }

    render(){
        return(
            <div className="stage_input_container">
                <h2>
                스테이지 추가 입력 창
                </h2>
                <form>
                  <TextField label="스테이지 이름" type="text" onChange={this.onChangeName} /><br />
                  <TextField label="스테이지 힌트" type="text" onChange={this.onChangeHint} /><br />
                  <TextField label="스테이지 미션" type="text" onChange={this.onChangeMission} /><br />
                  <TextField label="스테이지 정답" type="text" onChange={this.onChangeAnswer} /><br />
                  <TextField label="스테이지 정답해설" type="text" onChange={this.onChangeComment} /><br />
                  <TextField label="스테이지 문제" type="text" onChange={this.onChangeProblem} /><br />
                </form>
                <Button variant="contained" color="primary" onClick={this.onClickInsertButton}>추가하기</Button>
            </div>
        );
    }
}

export default AdminStageAddForm;