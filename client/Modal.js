import React, { Component } from 'react';
import Modal from 'react-modal';
import VideoPlayer from './VideoPlay';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
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
            <div>
              <button onClick={this.openModal}>설명 보기</button>
              <Modal
                isOpen={modal}
                onAfterOpen={this.openModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                {NotButton === true ?
                <div>
                <button onClick={this.clickButton}>게임설명</button>
                <button onClick={this.clickButton}>퀴즈설명</button> 
                <button onClick={this.clickButton}>미션설명</button>
                <br />
                <button onClick={() => this.setState({modal : false})}>창 닫기</button>
                </div>

                :
                <div> 
                <VideoPlayer id={'9vkZVikwTAU'} startTime={this.state.startPoint}/>
                <button onClick={this.goBack}>뒤로가기</button>
                </div>
                  }
                
              </Modal>
            </div>
          );
    }
}

export default ExplainModal;