import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './mission.css';
import GifPlayer from 'react-gif-player';
import Button from '@material-ui/core/Button';

class mission extends Component {
    _isMounted =  false;
    state = {
        data : 0,
        gifTime : 0,
        mission:'',
        area:'',
        stage:'',
        comment:'',
    }

    componentDidMount = () => {
        this._isMounted = true;
        if(this.props.location.data != undefined){
            if(this._isMounted==true){
                setTimeout(() => {
                    this.setState({
                        gifTime : this.state.gifTime + 1 
                    })
                },1100);
                this.setState({
                    stage : this.props.location.data.stage,
                    area:this.props.location.data.area,
                    mission:this.props.location.data.mission,
                    comment:this.props.location.data.comment
                });
            }
        }else{
            this._isMounted = false;
            this.props.history.replace({
                pathname: '/'
            }) 
        }
    }  

    componentWillUnmount () {
        this._isMounted = false;
    }

    touchGif = () => {
        this.setState({
            gifTime : 0
        })
        setTimeout(() => {
            this.setState({
                gifTime : this.state.gifTime + 1 
            })
        },1100)
    }

    copyHashtag = (e) => {
        alert('해쉬태그가 복사 되었습니다.');
    }

    onClickSurveyButton = () => {
        window.open('http://naver.me/5tL6q1gt', '_blank');
    }

    render() {
        const {stage,area,mission,comment} = this.state;
        if(this._isMounted){
            return (
                <div>
                <div id="content">
                {/* <!-- 스테이지 정답 확인 이미지 + message --> */}
                <div id="success_container">
                <h1>축하합니다!</h1>
                <h3>{area} 스테이지를 해결하셨습니다.</h3>
                <h3>{comment}</h3>
                {this.state.gifTime == 0 ? 
                <GifPlayer gif={require('../images/intro.gif')} autoplay={true} alt="GIF" /> :
                <GifPlayer gif={require('../images/loop.gif')} autoplay={true} alt="GIF" onTogglePlay={this.touchGif} />
                }
                </div>

                    <div id="mission_container">
                        <h2>미션은 {mission} 입니다.</h2> 
                        <p className="mission_hashtag"><strong>주의사항</strong><br /> SNS에 올릴 때 해쉬태그를 추가해주세요.</p>
                        <CopyToClipboard text={"#대전여행 #미션여행"} onCopy={this.copyHashtag}>
                        <span>#대전여행 #미션여행</span>
                        </CopyToClipboard>
                        <p>(위 해쉬태그를 누르면 복사됩니다.)</p>
                        <div id="SNS-container">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img id = "instagram-img" className = "sns_image" src={require('../images/instagram.jpeg')} alt = "instagram" /> 
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img id="facebook-img" className = "sns_image" src={require('../images/facebook.jpeg')} alt = "facebook" />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img id="twitter-img" className = "sns_image" src={require('../images/twitter.png')} alt = "twitter" />
                        </a>
                        </div>
                    </div>

                    <div className="survey_container">
                        <Button variant="contained" color="secondary" onClick={this.onClickSurveyButton} >설문 이동</Button>
                    </div>

                    <div id="button_container">
                        <h2>{stage}</h2> 
                    </div>
                </div>
        </div>
            )
        }else{
            return <div>Error</div>
        }
    }
}

export default mission;
