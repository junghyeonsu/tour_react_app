import React, {Component} from 'react';
import './adminStageModal.css';
import { Close } from '@material-ui/icons'

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

    onClickModifyButton = (e) => {
        const {id, hint, mission, name, answer} = this.state;
        e.preventDefault();
        console.log("---넣을 데이터---");
        console.log(`정답 : ${answer}`);
        console.log(`힌트 : ${hint}`);
        console.log(`미션 : ${mission}`);
        console.log(`이름 : ${name}`);
        console.log(`고유 아이디 값 : ${id}`);
        const response = await fetch('/주소', {
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
                <div className="modal_content">
                    <Close style={{ fontSize: 40 }} className="close_button" color="secondary" onClick={outModal} />
                    <div className="modal_form">
                        <h3>
                            스테이지 입력 창
                        </h3>
                        <form onSubmit={this.onClickModifyButton}>
                            정답 <input type="text" value={answer} onChange={this.onChangeAnswer} /><br />
                            힌트 <input type="text" value={hint} onChange={this.onChangeHint} /><br />
                            미션 <input type="text" value={mission} onChange={this.onChangeMission} /><br />
                            이름 <input type="text" value={name} onChange={this.onChangeName} /><br />
                            {currentStage._id}
                            <button>수정</button>
                        </form>
                        <br />
                        <button onClick={this.onClickDeleteButton}>삭제하기</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminStageModal;