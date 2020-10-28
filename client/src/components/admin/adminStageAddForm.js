import React, {Component} from 'react';
import './adminStageAddForm.css';

class AdminStageAddForm extends Component {

    state = {
      name : "",
      hint : "",
      mission : "",
      answer : "",
    }

    onClickInsertButton = async e => {
      const {name, hint, mission, answer} = this.state;
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
            stageAnswer : answer
           }),
        });
        console.log(await response.text());
      }
    
    onChangeName = (e) => {
      this.setState({
        title : e.target.value
      })
    }

    onChangeHint = (e) => {
      this.setState({
        image : e.target.value
      })
    }

    onChangeMission = (e) => {
      this.setState({
        video : e.target.value
      })
    }

    onChangeAnswer = (e) => {
      this.setState({
        answer : e.target.value
      })
    }

    render(){
        return(
            <div>
                <div>
                스테이지 추가 입력 창
                </div>
                <form onSubmit={this.onClickInsertButton}>
                    스테이지 이름 <input type="text" onChange={this.onChangeName} /><br />
                    스테이지 힌트 <input type="text" onChange={this.onChangeHint} /><br />
                    스테이지 미션 <input type="text" onChange={this.onChangeMission} /><br />
                    스테이지 정답 <input type="text" onChange={this.onChangeAnswer} /><br />
                <button>추가</button>
                </form>
            </div>
        );
    }
}

export default AdminStageAddForm;