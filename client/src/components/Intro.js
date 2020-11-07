import React,{Component} from 'react';
import './main.css';
import VideoPlay from './VideoPlay';
import Button from '@material-ui/core/Button';

class Intro extends Component{
  async componentDidMount(){
    const response = await fetch(`${this.props.match.url}`,{
      method : 'GET',
      headers : {
        'Content-Type': 'application/json',
      }
    })
    if(this.props.location.data == null){
      this.setState({
        stage : null, 
        quiz : null,
      });
    }else{
      this.setState({
        stage : this.props.location.data.stage, 
        quiz : this.props.location.data.quiz,
      });
    }
  }

  IntroSuccess = () => {
    console.log("click");
    if(this.state.stage!=null && this.state.quiz !=null){
      this.props.history.push({
        pathname: `${this.state.stage}/${this.state.quiz}`
      });
    }
  }
    render(){
        return (
          <div style={{textAlign:'center'}}>        
            <div>
            <VideoPlay id={'9vkZVikwTAU'} startTime={0} seek= {{게임설명:16,퀴즈설명:32}} count = {2}/>     
            </div>
            <Button variant="contained" color="primary" style={{width:'85%'}} onClick={this.IntroSuccess}>확인</Button>
          </div>
          
        );
      }
}

export default Intro;