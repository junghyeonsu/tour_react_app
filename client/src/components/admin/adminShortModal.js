import React, {Component} from 'react';
import './adminGameModal.css'
import { Close } from '@material-ui/icons'
import { post } from 'axios';

class AdminShortModal extends Component {

    state = {
        title : "",
        image : "",
        video : "",
        text : "",
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
            answer : currentGame.answer,
            id : currentGame._id
        });
    }

    onClickModifyButton = (e) => {
        const { title, image, video, text, answer, id } = this.state;
        e.preventDefault();
        const url = '/api/setGameInfo';
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('video', video);
        formData.append('text', text);
        formData.append('answer', answer);
        formData.append('type', "주관식");
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
        const { title, image, video, text, answer } = this.state;
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
                            이미지 <input type="file" onChange={this.onChangeImage} /><br />
                            <img src={image} alt="image" /> <br />
                            동영상 <input type="text" value={video} onChange={this.onChangeVideo} /><br />
                            글 <input type="text" value={text} onChange={this.onChangeText} /><br />
                            정답 <input type="text" value={answer} onChange={this.onChangeAnswer} /><br />
                            {currentGame._id}
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