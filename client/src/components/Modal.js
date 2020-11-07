import React, { Component } from 'react';
import Modal from 'react-modal';
import VideoPlayer from './VideoPlay';
import Button from '@material-ui/core/Button';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '70%',
      height                : '50%'
    }
    };

const Explain = {
    explain1 : '게임설명',
    explain2 : '퀴즈설명',
    explain3 : '미션설명',
    startPoint : 0,
}

Modal.setAppElement('#root')

class ExplainModal extends Component{
    state={
        modal : false,
        NotButton : true,
        explain : '',
    }

    
    openModal = () =>{
        this.setState({modal : true});
    }
    
    closeModal = () =>{
        this.setState({modal : false});
    }

    clickButton = (e) => {
        this.setState({NotButton : false});
        console.log(e.target.innerHTML)
        if(e.target.innerHTML === '게임설명'){
            console.log(1)
            this.setState({explain : Explain.explain1,startPoint : 8});
        }
        else if(e.target.innerHTML === '퀴즈설명'){
            console.log(2)
            this.setState({explain : Explain.explain2,startPoint : 16});
        }
        else{
            console.log(3)
            this.setState({explain : Explain.explain3,startPoint : 24});
        }
    }

    goBack = () => {
        this.setState({NotButton : true})
    }
    render(){
        const {modal,NotButton} = this.state;
        return (
            <div id="But">
              <Button variant="contained" color="primary" onClick={this.openModal}>설명 보기</Button>
              <Modal
                isOpen={modal}
                onAfterOpen={this.openModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                {NotButton === true ?
                <div className="ButContainer">
                <Button variant="contained" color="secondary" style={{marginTop:'15%',marginBottom : '15%',width:'100%'}} onClick={this.clickButton}>게임설명</Button>
                <Button variant="contained" color="secondary" style={{marginBottom : '15%',width:'100%'}}className="buttonSt" onClick={this.clickButton}>퀴즈설명</Button> 
                <Button variant="contained" color="secondary" style={{marginBottom : '15%',width:'100%'}}className="buttonSt" onClick={this.clickButton}>미션설명</Button>
                <Button variant="contained" color="secondary" style={{marginBottom : '15%',width:'100%'}}className="buttonSt" onClick={() => this.setState({modal : false})}>창 닫기</Button>
                </div> 

                :
                <div style={{width:'100%', height:'100%'}}> 
                    <VideoPlayer id={'9vkZVikwTAU'} startTime={this.state.startPoint}/>
                    <Button variant="contained" color="secondary" className="buttonSt" onClick={this.goBack}>뒤로가기</Button>
                </div>
                  }
                
              </Modal>
            </div>
          );
    }
}

export default ExplainModal;