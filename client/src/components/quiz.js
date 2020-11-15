import React,{Component} from 'react';
import TourIntroHeader from './tourIntroHeader';
import './quiz.css';
class Quiz extends Component{
    _isMounted =  false;
    state = {
        comment:'',
        area:'',
        hint:''
    }
    componentDidMount = () => {
        this._isMounted = true;
        if(this.props.location.data != undefined){
            if(this._isMounted==true){
                this.setState({
                    comment : this.props.location.data.comment,
                    area:this.props.location.data.area,
                    hint:this.props.location.data.hint
                })  
            }
        }else{
            this._isMounted = false;
            this.props.history.replace({
                pathname: '/'
            }) 
        }
    }  

    componentWillUnmount(){
        this._isMounted = false;
    }
    render(){
        if(this._isMounted){
            const {comment,area,hint} = this.state;
            return(
                <div className="hint_container">
                <div id="explain">
                <div id="QuizExplain">
                {
                comment =='' ?
                '': <div>해설: {comment}</div>
                }
                </div>
                <div id="content_quiz2" className="container">
                    <p>
                    {area} 구역의 힌트는
                    </p>
                    <span id='hintAnswer'>{hint}</span>입니다.
                </div>
                </div>
                <div id='bottom'>
                <TourIntroHeader />
                </div>
            </div>
            )
        }
        else{
            return <div>Error</div>
        }
    }
}

export default Quiz;
