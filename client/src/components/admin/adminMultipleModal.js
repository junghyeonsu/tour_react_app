import React, {Component} from 'react';
import './adminGameModal.css'
import { Close } from '@material-ui/icons'

class AdminShortModal extends Component {

    state = {
        title : "",
        image : "",
        video : "",
        question : "",
        choice1 : "",
        choice2 : "",
        choice3 : "",
        choice4 : "",
        choice5 : "",
        answer : "",
      }

    componentDidMount = () => {
        const {currentGame} = this.props;
        this.setState({
            title : currentGame.title,
            image : currentGame.image,
            video : currentGame.video,
            question : currentGame.question,
            answer : currentGame.answer,
            id : currentGame._id
        });
        // currentGame.choice.map((i, idx) => {
        //     if(idx == 0) {
        //         this.setState({
        //             choice1 : i,
        //         });
        //     } else if (idx == 1) {
        //         this.setState({
        //             choice2 : i,
        //         });
        //     } else if (idx == 2) {
        //         this.setState({
        //             choice3 : i,
        //         });
        //     } else if (idx == 3) {
        //         this.setState({
        //             choice4 : i,
        //         });
        //     } else if (idx == 4) {
        //         this.setState({
        //             choice5 : i,
        //         });
        //     }
        // })
    }

    onClickModifyButton = (e) => {
        const {id ,title, image, video, question, choice1, choice2, choice3, choice4, choice5, answer } = this.state;
        e.preventDefault();
        console.log("현재 타이틀 : ", title);
        console.log("현재 이미지 : ", image);
        console.log("현재 비디오 : ", video);
        console.log("현재 질문 : ", question);
        console.log("현재 답 : ", answer);
        console.log("현재 고유 아이디 : ", id);
        console.log("현재 선택지 1 : ", choice1);
        console.log("현재 선택지 2 : ", choice2);
        console.log("현재 선택지 3 : ", choice3);
        console.log("현재 선택지 4 : ", choice4);
        console.log("현재 선택지 5 : ", choice5);
    }

    onClickDeleteButton = async () => {
        await fetch('/api/deleteGame', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              /* server에서 받을 때는 req.body.id 이런식으로 접근가능 */
              id : this.state.id
             }),
        }).then(
            this.props.getApi()
        );
    }

    onChangeTitle = (e) => {
        this.setState({
          title : e.target.value
        })
      }
  
      onChangeImage = (e) => {
        this.setState({
          image : e.target.files[0],
        });
        console.log(e.target.files[0]);
      }
  
      onChangeVideo = (e) => {
        this.setState({
          video : e.target.value
        })
      }
  
      onChangeQuestion = (e) => {
          this.setState({
            answer : e.target.value
          })
      }
  
      onChangeChoice1 = (e) => {
          this.setState({
            choice1 : e.target.value
          })
      }
  
      onChangeChoice2 = (e) => {
          this.setState({
            choice2 : e.target.value
          })
      }
  
      onChangeChoice3 = (e) => {
          this.setState({
            choice3 : e.target.value
          })
      }
  
      onChangeChoice4 = (e) => {
          this.setState({
            choice4 : e.target.value
          })
      }
  
      onChangeChoice5 = (e) => {
          this.setState({
            choice5 : e.target.value
          })
      }
  
      onChangeAnswer = (e) => {
          this.setState({
            answer : e.target.value
          })
      }
    
    render(){
        const { outModal, currentGame } = this.props;
        const {id ,title, image, video, question, choice1, choice2, choice3, choice4, choice5, answer } = this.state;

        return(
            <div className="modal">
                <div className="modal_content">
                    <Close style={{ fontSize: 40 }} className="close_button" color="secondary" onClick={outModal} />
                    <div className="modal_form">
                        <h2>
                            게임 추가 입력 창
                        </h2>
                        <form onSubmit={this.onClickModifyButton}>
                            제목 <input type="text" value={title} onChange={this.onChangeTitle} /><br />
                            이미지 <input type="file" value={image} onChange={this.onChangeImage} /><br />
                            동영상 <input type="text" value={video} onChange={this.onChangeVideo} /><br />
                            문제 <input type="text" value={question} onChange={this.onChangeQuestion} /><br />
                            선택지 1 <input type="text" value={choice1} onChange={this.onChangeChoice1} /><br />
                            선택지 2 <input type="text" value={choice2} onChange={this.onChangeChoice2} /><br />
                            선택지 3 <input type="text" value={choice3} onChange={this.onChangeChoice3} /><br />
                            선택지 4 <input type="text" value={choice4} onChange={this.onChangeChoice4} /><br />
                            선택지 5 <input type="text" value={choice5} onChange={this.onChangeChoice5} /><br />
                            정답 <input type="text" value={answer} onChange={this.onChangeAnswer} /><br />
                        <button>수정</button>
                        </form>
                        <br />
                        <button onClick={this.onClickDeleteButton}>삭제</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminShortModal;