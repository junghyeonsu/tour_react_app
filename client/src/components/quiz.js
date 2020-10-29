import React,{Component} from 'react';
import TourIntroHeader from './tourIntroHeader';

class Quiz extends Component{
    // 헤으응....
    render(){
        console.log(this.props.location.state)
        return(
            <div>
                <div id="content">
                {/* <!-- 컨텐츠 이미지 --> */}
                <div id="content_image_container">
                    <img id="content_image" src={require('../images/abcd-01-1.jpg')} alt="이미지" />
                </div>
                </div>
                <div id="content_quiz" className="container">
                    {this.props.location.state.area} 구역의 힌트는 {this.props.location.state.hint}입니다.
                </div>
                <TourIntroHeader />
            </div>
        )
    }
}

export default Quiz;