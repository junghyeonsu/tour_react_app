import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './mission.css';
import TourIntroHeader from './tourIntroHeader';

class mission extends Component {



    state = {
        data : 0
    }

    static getDerivedStateFromProps (props) {
        if(props.location.data) {
            console.log("오케이 너 오케이");
        } else {
            props.location.data = 1;
            console.log(";");
            props.history.push({
                pathname: '/'
            }) 
            return null;
        }
        return null;
    }

    componentWillUnmount () {

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
                <img id="success_image" src={require('../images/Daejeon.jpg')} alt="대전광역시청" />
                <p><i>1995년 대전이 직할시로 승격한 해입니다.</i></p>
                </div>
                {/* <!-- 퀴즈 --> */}
                <div id="mission_container">
                    <h1>미션은 {String(this.props.location.data['mission'])} 입니다.</h1> 
                    <p>주의사항 : SNS에 올릴 때 해쉬태그를 추가해주세요.</p>
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
                <button id="content_nextBtn" className="btn">다음 스테이지</button>
                <button id="content_closeBtn" className="btn">그만 하기</button>
                </div>
                    <div id="next_stage"></div>
                </div>

                <TourIntroHeader />

        </div>
        )
    }
}

export default mission;
