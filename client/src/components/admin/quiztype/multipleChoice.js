import React, {Component} from 'react';
import { post } from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './gameType.css';

class MultipleChoice extends Component {

    state = {
        title : "",
        image : "",
        video : "",
        text : "",
        choice1 : "",
        choice2 : "",
        choice3 : "",
        choice4 : "",
        choice5 : "",
        answer : "",
      }
  
    onClickInsertButton = async e => {
        var {title, image, video, text, choice1, choice2, choice3, choice4, choice5, answer } = this.state;
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
        formData.append('text', text);
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
        return(
            <div className="multiple_container">
                <form>
                <TextField label="제목" type="text" onChange={this.onChangeTitle} /><br />
                <TextField label="이미지" type="file" onChange={this.onChangeImage} /><br />
                <TextField label="동영상" type="text" onChange={this.onChangeVideo} /><br />
                <TextField label="문제" type="text" onChange={this.onChangeText} /><br />
                <TextField label="선택지 1" type="text" onChange={this.onChangeChoice1} /><br />
                <TextField label="선택지 2" type="text" onChange={this.onChangeChoice2} /><br />
                <TextField label="선택지 3" type="text" onChange={this.onChangeChoice3} /><br />
                <TextField label="선택지 4" type="text" onChange={this.onChangeChoice4} /><br />
                <TextField label="선택지 5" type="text" onChange={this.onChangeChoice5} /><br />
                <TextField label="정답" type="text" onChange={this.onChangeAnswer} /><br />
              </form> 
                <Button variant="contained" color="primary"  onClick={this.onClickInsertButton}>추가하기</Button>
            </div>
        );
    }
}

export default MultipleChoice;