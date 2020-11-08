import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './mission.css';
import TourIntroHeader from './tourIntroHeader';
import GifPlayer from 'react-gif-player';

class mission extends Component {

    state = {
        data : 0,
        gifTime : 0
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                gifTime : this.state.gifTime + 1 
            })
        },1100)
    }  

    static getDerivedStateFromProps (props) {
        if(!props.location.data) {
            props.location.data = 1;
            props.history.push({
                pathname: '/'
            }) 
            return null;
        } 
        return null;
    }

    componentWillUnmount () {

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

    render() {
        return (
            <div>
                <div id="content">
                {/* <!-- 스테이지 정답 확인 이미지 + message --> */}
                <div id="success_container">
                <h1>축하합니다!</h1>
                <h2>{String(this.props.location.data['area'])}를 해결하셨습니다.</h2>
                
                {this.state.gifTime == 0 ? 
                <GifPlayer gif={require('../images/intro.gif')} autoplay={true} alt="GIF" /> :
                <GifPlayer gif={require('../images/loop.gif')} autoplay={true} alt="GIF" onTogglePlay={this.touchGif} />
                }
                </div>

                <div id="mission_container">
                    <h1>미션은 {String(this.props.location.data['mission'])} 입니다.</h1> 
                    <p>주의사항 : SNS에 올릴 때 해쉬태그를 추가해주세요.</p>
                    <p>(아래 해쉬태그를 누르면 복사됩니다.)</p>
                    <CopyToClipboard text={"#대전여행 #미션여행"} onCopy={this.copyHashtag}>
                    <span>#대전여행 #미션여행</span>
                    </CopyToClipboard>
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
                <div id="button_container">
                <h2>{String(this.props.location.data['stage'])}</h2> 
                </div>
                </div>
                {/* <TourIntroHeader /> */}
        </div>
        )
    }
}

export default mission;
