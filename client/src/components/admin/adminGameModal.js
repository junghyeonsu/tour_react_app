import React, {Component} from 'react';
import './adminGameModal.css'
import { Close } from '@material-ui/icons'

class AdminGameModal extends Component {

    state = {
        title : "",
        image : "",
        video : "",
        text : "",
        answer : "",
    }

    componentDidMount = () => {
        const {currentGame} = this.props;
        this.setState({
            title : currentGame.title,
            image : currentGame.image,
            video : currentGame.video,
            text : currentGame.text,
            answer : currentGame.answer,
        });
    }

    onClickInsertButton = (e) => {
        const { title, image, video, text, answer } = this.state;
        e.preventDefault();
        console.log("현재 타이틀 : ", title);
        console.log("현재 이미지 : ", image);
        console.log("현재 비디오 : ", video);
        console.log("현재 텍스트 : ", text);
        console.log("현재 답 : ", answer);
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
                    <div>
                        <div>
                            게임 추가 입력 창
                        </div>
                        <form onSubmit={this.onClickInsertButton}>
                            제목 <input type="text" value={title} onChange={this.onChangeTitle} /><br />
                            이미지 <input type="file" onChange={this.onChangeImage} /><br />
                            <img src={image} alt="image" /> <br />
                            동영상 <input type="text" value={video} onChange={this.onChangeVideo} /><br />
                            글 <input type="text" value={text} onChange={this.onChangeText} /><br />
                            정답 <input type="text" value={answer} onChange={this.onChangeAnswer} /><br />
                            {currentGame._id}
                        <button>추가</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminGameModal;