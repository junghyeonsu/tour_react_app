import React, {Component} from 'react';
import './adminStageModal.css';
import { Close } from '@material-ui/icons'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AdminStageModal extends Component {
    
    state = {
        answer : "",
        hint : "",
        mission : "",
        name : "",
        comment:"",
        id : "",
        problem:"",
    };

    componentDidMount = () => {
        const {currentStage} = this.props;
        this.setState({
            answer : currentStage.answer,
            hint : currentStage.hint,
            mission : currentStage.mission,
            name : currentStage.name,
            comment : currentStage.comment,
            problem:currentStage.problem,
            id : currentStage._id
        })
    }

    onChangeAnswer = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    onChangeHint = (e) => {
        this.setState({
            hint: e.target.value
        })
    }

    onChangeMission = (e) => {
        this.setState({
            mission: e.target.value
        })
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onChangeComment= (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    onChangeProblem= (e) => {
        this.setState({
            problem: e.target.value
        })
    }
    onClickModifyButton = async (e) => {
        const {id, hint, mission, name, comment,answer,problem} = this.state;
        console.log("stageAnswerModal",answer.toString())
        console.log("stageAnswerModal",mission.toString())
        console.log("stageAnswerModal",hint.toString())
        e.preventDefault();
        await fetch('/api/modifyStage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              /* server에서 받을 때는 req.body.stageName 이런식으로 접근가능 */
              stageName : name,
              stageHint : hint.toString(),
              stageMission : mission.toString(),
              stageAnswer : answer.toString(),
              stageComment :comment,
              stageProblem:problem,
              id : id
             }),
          }).then(
            window.location.reload()
        );
    }

    onClickDeleteButton = async () => {
        await fetch('/api/deleteStage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              /* server에서 받을 때는 req.body.stageName 이런식으로 접근가능 */
              id : this.state.id
             }),
        }).then(
            this.props.getStageList()
        );
    }

    render(){
        const { outModal, currentStage } = this.props;
        const { hint, mission, name, answer,comment,problem} = this.state;
        return(
            <div className="modal">
                <div className="stage_modal_content">
                    <Close style={{ fontSize: 40 }} className="close_button" color="secondary" onClick={outModal} />
                    <div className="stage_modal_form">
                        <h3>
                            스테이지 입력 창
                        </h3>
                        <form>
                        <TextField label="스테이지 이름" value={name} type="text" onChange={this.onChangeName} /><br />
                        <TextField label="스테이지 힌트" value={hint} type="text" onChange={this.onChangeHint} /><br />
                        <TextField label="스테이지 미션" value={mission} type="text" onChange={this.onChangeMission} /><br />
                        <TextField label="스테이지 정답" value={answer} type="text" onChange={this.onChangeAnswer} /><br />
                        <TextField label="스테이지 정답해설" value={comment} type="text" onChange={this.onChangeComment} /><br />
                        <TextField label="스테이지 정답해설" value={problem} type="text" onChange={this.onChangeProblem} /><br />
                        </form>
                        <br />
                        <Button variant="contained" color="primary" onClick={this.onClickModifyButton}>수정하기</Button>
                        <Button variant="contained" color="secondary" onClick={this.onClickDeleteButton}>삭제하기</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminStageModal;