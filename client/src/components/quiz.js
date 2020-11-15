import React,{Component} from 'react';
import TourIntroHeader from './tourIntroHeader';
import './quiz.css';
class Quiz extends Component{
    render(){
        return(
            <div className="hint_container">
                <div id="explain">
                <div id="QuizExplain">
                {
                this.props.location.data.comment =='' ?
                '': <div>해설: {this.props.location.data.comment}</div>
                }
                </div>
                <div id="content_quiz2" className="container">
                    <p>
                    {this.props.location.data.area} 구역의 힌트는
                    </p>
                    <span id='hintAnswer'>{this.props.location.data.hint}</span>입니다.
                </div>
                </div>
                <div id='bottom'>
                <TourIntroHeader />
                </div>
            </div>
        )
    }
}

export default Quiz;
