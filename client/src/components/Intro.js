import React,{Component} from 'react';
import './main.css';
import VideoPlay from './VideoPlay';
class Intro extends Component{

    render(){

        return (
          <div>
                {/* <!-- 컨텐츠 부분 --> */}
            <div id="content"> </div>
            
            {/* <!-- 컨텐츠 이미지 --> */}
            <div id="content_image_container">
                <img id="content_image" src={require('../images/abcd-01-1.jpg')} alt="이미지"/>
            </div>
            
            <div>
            <VideoPlay id={'9vkZVikwTAU'} startTime={0} seek= {{게임설명:16,퀴즈설명:32}} count = {2}/>     
            </div>
            
          </div>
          
        );
      }
}

export default Intro;