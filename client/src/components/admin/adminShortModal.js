import React, {Component} from 'react';
import './adminGameModal.css'
import { Close } from '@material-ui/icons'
import { post } from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AdminShortModal extends Component {

    state = {
        title : "",
        image : "",
        video : "",
        text : "",
        comment:"",
        answer : "",
        id : ""
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
    }

    onClickModifyButton = (e) => {
        const { title, image, video, text, answer, id } = this.state;
        e.preventDefault();
        const url = '/api/modifyGame';
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('video', video);
        formData.append('text', text);
        formData.append('answer', answer);
        formData.append('type', "주관식");
        formData.append('id', id);
        const config = {
          headers : {
            'content-type':'multipart/form-data'
          }
        }
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
        console.log("타이틀은 : " , e.target.value);
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
        console.log("이미지는 : ",e.target.files[0]);
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

    onChangeAnswer = (e) => {
        this.setState({
          answer : e.target.value
        })
    }
    
    render(){
        const { outModal, currentGame } = this.props;
        const { title, image, video, text, comment,answer } = this.state;
        return(
            <div className="modal">
                <div className="short_modal_content">
                    <Close style={{ fontSize: 40 }} className="close_button" color="secondary" onClick={outModal} />
                    <div className="short_modal_form">
                        <h2>
                            게임 추가 입력 창
                        </h2>
                        <form>
                            <TextField label="제목" type="text" value={title} onChange={this.onChangeTitle} /><br />
                            <TextField label="이미지" type="file" onChange={this.onChangeImage} /><br />
                            <img src={image} alt="image" /> <br />
                            <TextField label="동영상" type="text" value={video} onChange={this.onChangeVideo} /><br />
                            <TextField label="문제" type="text" value={text} onChange={this.onChangeText} /><br />
                            <TextField label="해설" type="text" value={comment} onChange={this.onChangeComment} /><br />
                            <TextField label="정답" type="text" value={answer} onChange={this.onChangeAnswer} /><br />
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

export default AdminShortModal;