import React,{Component} from 'react';
import TourIntro from './tourIntro';

class Quiz extends Component{
    render(){
        console.log(this.props.quiz)
        return(
            <div>
                <div id="content">
                {/* <!-- 컨텐츠 이미지 --> */}
                <div id="content_image_container">
                    <img id="content_image" src={require('../images/abcd-01-1.jpg')} alt="이미지" />
                </div>
                </div>
                <div id="content_quiz" className="container">
                    A 구역의 몇 번째 최종답의 힌트는 이것입니다.
                </div>
                <TourIntro />
            </div>
        )
    }
}

export default Quiz;