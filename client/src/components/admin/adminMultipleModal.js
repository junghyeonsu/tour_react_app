import React, {Component} from 'react';
import './adminGameModal.css'
import { Close } from '@material-ui/icons'
import { post } from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AdminMultipleModal extends Component {

    state = {
        title : "",
        image : "",
        video : "",
        text : "",
        comment: "",
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
            text : currentGame.text,
            comment : currentGame.comment,
            answer : currentGame.answer,
            id : currentGame._id
        });
        currentGame.choice.map((i, idx) => {
            if(idx == 0) {
                this.setState({
                    choice1 : i,
                });
            } else if (idx == 1) {
                this.setState({
                    choice2 : i,
                });
            } else if (idx == 2) {
                this.setState({
                    choice3 : i,
                });
            } else if (idx == 3) {
                this.setState({
                    choice4 : i,
                });
            } else if (idx == 4) {
                this.setState({
                    choice5 : i,
                });
            }
        })
    }

    onClickModifyButton = (e) => {
      const {id ,title, image, video, text,comment, choice1, choice2, choice3, choice4, choice5, answer } = this.state;
        console.log(image);
        e.preventDefault();
        var choice = [];
        const formData = new FormData();
        const config = {
          headers : {
            'content-type':'multipart/form-data'
          }
        }
        const url = '/api/modifyGame';
        formData.append('id', id);
        formData.append('title', title);
        formData.append('image', image);
        formData.append('video', video);
        formData.append('text', text);
        formData.append('comment', text);
        choice.push(choice1);
        choice.push(choice2);
        choice.push(choice3);
        choice.push(choice4);
        choice.push(choice5);
        formData.append('choice', choice);
        formData.append('answer', answer);
        formData.append('type', "객관식");
        return post(url, formData, config).then(
          window.location.reload()
        );
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
      onChangeComment = (e) => {
        this.setState({
          comment : e.target.value
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
  
      onChangeText = (e) => {
          this.setState({
            text : e.target.value
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
        const {id ,title, image, video, text, comment,choice1, choice2, choice3, choice4, choice5, answer } = this.state;

        return(
            <div className="modal">
                <div className="multiple_modal_content">
                    <Close style={{ fontSize: 40 }} className="close_button" color="secondary" onClick={outModal} />
                    <div className="multiple_modal_form">
                        <h2>
                            게임 추가 입력 창
                        </h2>
                        <form>
                            <TextField type="text" label="제목" value={title} onChange={this.onChangeTitle} /><br />
                            <TextField type="file" label="이미지" onChange={this.onChangeImage} /><br />
                            <img src={image} alt="image" /> <br />
                            <TextField type="text" label="동영상" value={video} onChange={this.onChangeVideo} /><br />
                            <TextField type="text" label="문제" value={text} onChange={this.onChangeText} /><br />
                            <TextField type="text" label="해설" value={comment} onChange={this.onChangeComment} /><br />
                            <TextField type="text" label="선택지1" value={choice1} onChange={this.onChangeChoice1} /><br />
                            <TextField type="text" label="선택지2" value={choice2} onChange={this.onChangeChoice2} /><br />
                            <TextField type="text" label="선택지3" value={choice3} onChange={this.onChangeChoice3} /><br />
                            <TextField type="text" label="선택지4" value={choice4} onChange={this.onChangeChoice4} /><br />
                            <TextField type="text" label="선택지5" value={choice5} onChange={this.onChangeChoice5} /><br />
                            <TextField type="text" label="정답" value={answer} onChange={this.onChangeAnswer} /><br />
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

export default AdminMultipleModal;