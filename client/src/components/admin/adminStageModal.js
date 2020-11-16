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
        id : "",
    };

    componentDidMount = () => {
        const {currentStage} = this.props;
        this.setState({
            answer : currentStage.answer,
            hint : currentStage.hint,
            mission : currentStage.mission,
            name : currentStage.name,
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

    onClickModifyButton = async (e) => {
        const {id, hint, mission, name, answer} = this.state;
        console.log(mission);
        e.preventDefault();
        await fetch('/api/modifyStage', {
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
        const { hint, mission, name, answer} = this.state;
        return(
            <div className="modal">
                <div className="stage_modal_content">
                    <Close style={{ fontSize: 40 }} className="close_button" color="secondary" onClick={outModal} />
                    <div className="stage_modal_form">
                        <h3>
                            스테이지 입력 창
                        </h3>
                        <form>
                            <TextField label="정답" type="text" value={answer} onChange={this.onChangeAnswer} /><br />
                            <TextField label="힌트" type="text" value={hint} onChange={this.onChangeHint} /><br />
                            <TextField label="미션" type="text" value={mission} onChange={this.onChangeMission} /><br />
                            <TextField label="이름" type="text" value={name} onChange={this.onChangeName} /><br />
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