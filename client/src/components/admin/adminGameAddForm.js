import React, {Component} from 'react';
import './adminGameAddForm.css';

class AdminGameAddForm extends Component {

    state = {
      title : "",
      image : "",
      video : "",
      text : "",
      answer : "",
    }

    onClickInsertButton = async e => {
      const {image, title, video, text, answer} = this.state;
        e.preventDefault();
        const response = await fetch('/api/insert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            title: title,
            image: image,
            video: video,
            text: text,
            answer: answer
           }),
        });
        console.log(await response.text());
      }
    
    onChangeTitle = (e) => {
      this.setState({
        title : e.target.value
      })
    }

    onChangeImage = (e) => {
      this.setState({
        image : e.target.value
      })
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
        return(
            <div>
                <div>
                게임 추가 입력 창
                </div>
                <form onSubmit={this.onClickInsertButton}>
                    제목 <input type="text" onChange={this.onChangeTitle} /><br />
                    이미지 <input type="text" onChange={this.onChangeImage} /><br />
                    동영상 <input type="text" onChange={this.onChangeVideo} /><br />
                    글 <input type="text" onChange={this.onChangeText} /><br />
                    정답 <input type="text" onChange={this.onChangeAnswer} /><br />
                <button>추가</button>
                </form>
            </div>
        );
    }
}

export default AdminGameAddForm;