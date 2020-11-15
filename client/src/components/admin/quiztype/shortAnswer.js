import React, {Component} from 'react';
import { post } from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './gameType.css';

class ShortAnswer extends Component {

    state = {
        title : "",
        image : "",
        video : "",
        text : "",
        comment:"",
        answer : "",
      }
  
    onClickInsertButton = async e => {
      const {image, title, video, text, comment,answer} = this.state;
      e.preventDefault();
      const url = '/api/setGameInfo';
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image', image);
      formData.append('video', video);
      formData.append('text', text);
      formData.append('comment', comment);
      formData.append('answer', answer);
      formData.append('type', "주관식");
      const config = {
        headers : {
          'content-type':'multipart/form-data'
        }
      }
      if(image==""){
        return post(url, formData, config).then(
          window.location.reload()
        );
      }else{
        return post(url, formData, config).then(
          // window.location.reload()
        );
      }
    }
    
    onChangeTitle = (e) => {
      this.setState({
        title : e.target.value
      })
    }
    onChangeComment= (e) => {
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

    onChangeAnswer = (e) => {
      this.setState({
        answer : e.target.value
      })
    }

    render(){
        return(
            <div className="short_container">
                <form>
                  <TextField label="제목" type="text" onChange={this.onChangeTitle} /><br />
                  <TextField label="이미지" type="file" onChange={this.onChangeImage} /><br />
                  <TextField label="동영상" type="text" onChange={this.onChangeVideo} /><br />
                  <TextField label="문제" type="text" onChange={this.onChangeText} /><br />
                  <TextField label="해설" type="text" onChange={this.onChangeComment} /><br />
                  <TextField label="정답" type="text" onChange={this.onChangeAnswer} /><br />
              </form>
                <Button variant="contained" color="primary" onClick={this.onClickInsertButton}>추가하기</Button>
            </div>
        );
    }
}

export default ShortAnswer;