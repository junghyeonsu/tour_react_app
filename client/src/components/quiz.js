import React,{Component} from 'react';
import TourIntroHeader from './tourIntroHeader';

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
                <div>
                    <div id="content">
                    </div>
                    {
                    comment =='' ?
                    '': <div>해설: {comment}</div>
                    }
                    <div id="content_quiz" className="container">
                        {area} 구역의 힌트는 {hint}입니다.
                    </div>
                    <TourIntroHeader />
                </div>
            )
        }
        else{
            return <div>Error</div>
        }
    }
}

export default Quiz;