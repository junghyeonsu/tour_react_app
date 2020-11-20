import React, { Component } from 'react';
import Modal from 'react-modal';
import VideoPlayer from './VideoPlay';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const styles  = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: '6vw',
      width: '20vw',
      margin : '10px'
    },
  };

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '100%',
      height                : '70%',
    }
    };

const Explain = {
    explain1 : '인트로무비',
    explain2 : '게임방법',
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
        if(e.target.innerHTML === '인트로무비'){
            console.log(1)
            this.setState({explain : Explain.explain1,startPoint : 0});
        }
        else if(e.target.innerHTML === '게임방법'){
            console.log(2)
            this.setState({explain : Explain.explain2,startPoint : 145});
          }
    }

    goBack = () => {
        this.setState({NotButton : true})
    }
    render(){
        const {modal,NotButton} = this.state;
        return (
            <div id="But">
              <Fab size="small" color="primary" onClick={this.openModal}>
                <ContactSupportIcon />
              </Fab>
              <Modal
                isOpen={modal}
                onAfterOpen={this.openModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                {NotButton === true ?
                <div className="ButContainer">
                <Button variant="contained" color="primary" style={{marginLeft:'auto', marginRight:'auto', marginTop:'15%',marginBottom : '15%',width:'70%'}} onClick={this.clickButton}>인트로무비</Button>
                <Button variant="contained" color="primary" style={{marginLeft:'auto', marginRight:'auto', marginBottom : '15%',width:'70%'}}className="buttonSt" onClick={this.clickButton}>게임방법</Button>
                <Button variant="contained" color="primary" style={{marginLeft:'auto', marginRight:'auto', width:'70%'}}className="buttonSt" onClick={() => this.setState({modal : false})}>창 닫기</Button>
                </div> 

                :
                <div style={{width:'100%', height:'100%'}}> 
                    <VideoPlayer id={'ANBPba55FcM'} startTime={this.state.startPoint}/>
                    <Button variant="contained" color="primary" className="buttonSt" onClick={this.goBack}>뒤로가기</Button>
                </div>
                  }
                
              </Modal>
            </div>
          );
    }
}

export default withStyles(styles)(ExplainModal);