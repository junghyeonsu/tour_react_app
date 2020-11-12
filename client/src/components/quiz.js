import React,{Component} from 'react';
import TourIntroHeader from './tourIntroHeader';

class Quiz extends Component{
    render(){
        return(
            <div>
                <div id="content">
                </div>
                {
                this.props.location.data.comment =='' ?
                '': <div>해설: {this.props.location.data.comment}</div>
                }
                <div id="content_quiz" className="container">
                    {this.props.location.data.area} 구역의 힌트는 {this.props.location.data.hint}입니다.
                </div>
                <TourIntroHeader />
            </div>
        )
    }
}

export default Quiz;