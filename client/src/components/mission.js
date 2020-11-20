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
                
                <GifPlayer gif={require('../images/스테이지 완료 루프이미지.gif')} autoplay={true} alt="GIF" />
                
                <h1>성공이야!</h1>
                <h4>{comment}</h4>
                
                <p>네가 찾은 {area}의
                <br/>데이터 암호가 비트가디언즈에게 전달되었어
                <br/>이제 데이터는 안전한 곳으로 이동될꺼야</p>
                </div>

                    <div id="mission_container">
                        <div>
                        <img src={require('../images/손가락하트.jpg')}></img>
                        <h2>손하트와 함께 {area}을 <br/>촬영하여 SNS에 공유해주세요</h2>
                        <span>(추첨을 통해 소정의 상품을 드립니다.)</span>
                        </div>

                        <span className="mission_hashtag"><strong>주의사항</strong><br /> * 아래의 해시태그를 포함해주세요.<br /> </span>
                        <CopyToClipboard text={"#스마티어링 대전"} onCopy={this.copyHashtag}>
                        <span>#스마티어링 대전</span>
                        </CopyToClipboard>
                        <p>(해시태그를 터치하시면 복사됩니다.)</p>
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
                        <h4>프로그램 개선을 위한 설문에 도움을 부탁드립니다.</h4>
                        <Button variant="contained" color="secondary" onClick={this.onClickSurveyButton} >설문지 작성</Button>
                    </div>

                    <div id="button_container">
                        <h2>{stage}</h2> 
                        <h4 className="mission_hashtag">{'* 추천장소는 데이터트래픽을 분석하여 관광객의 방문이 가장적은 \n 안전한 장소로 안내합니다.'}</h4>
                        
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
