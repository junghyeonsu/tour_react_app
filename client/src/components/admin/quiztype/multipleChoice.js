import React, {Component} from 'react';
import { post } from 'axios';

class MultipleChoice extends Component {

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
  
    onClickInsertButton = async e => {
        var {title, image, video, question, choice1, choice2, choice3, choice4, choice5, answer } = this.state;
        e.preventDefault();
        var choice = [];
        const formData = new FormData();
        const config = {
          headers : {
            'content-type':'multipart/form-data'
          }
        }
        const url = '/api/setGameInfo';
        formData.append('title', title);
        formData.append('image', image);
        formData.append('video', video);
        formData.append('question', question);
        choice.push(choice1);
        choice.push(choice2);
        choice.push(choice3);
        choice.push(choice4);
        choice.push(choice5);
        formData.append('choice', choice);
        
        formData.append('answer', answer);
        formData.append('type', "객관식");
        return post(url, formData, config);
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
        return(
            <div>
                <form onSubmit={this.onClickInsertButton}>
                제목 <input type="text" onChange={this.onChangeTitle}  /><br />
                이미지 <input type="file" onChange={this.onChangeImage}  /><br />
                동영상 <input type="text" onChange={this.onChangeVideo}  /><br />
                문제 <input type="text" onChange={this.onChangeQuestion}  /><br />
                선택지 1 <input type="text" onChange={this.onChangeChoice1}  /><br />
                선택지 2 <input type="text" onChange={this.onChangeChoice2}  /><br />
                선택지 3 <input type="text" onChange={this.onChangeChoice3}  /><br />
                선택지 4 <input type="text" onChange={this.onChangeChoice4}  /><br />
                선택지 5 <input type="text" onChange={this.onChangeChoice5}  /><br />
                정답 <input type="text" onChange={this.onChangeAnswer}  /><br />
                <button>추가하기</button>
              </form> 
            </div>
        );
    }
}

export default MultipleChoice;