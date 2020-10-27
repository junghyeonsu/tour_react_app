import React, { Component } from 'react';
import './mission.css';
import TourIntroHeader from './tourIntroHeader';

class mission extends Component {
    render() {
        return (
            <div>
                <div id="content">
                {/* <!-- 컨텐츠 이미지 --> */}
                <div id="content_image_container">
                    <img id="content_image" src={require('../images/abcd-01-1.jpg')} alt="이미지" />
                </div>
                {/* <!-- 스테이지 정답 확인 이미지 + message --> */}
                <div id="success_container">
                <h1>축하합니다!</h1>
                <h2>스테이지를 해결하셨습니다.</h2>
                <img id="success_image" src={require('../images/Daejeon.jpg')} alt="대전광역시청" />
                <p><i>1995년 대전이 직할시로 승격한 해입니다.</i></p>
                </div>
                {/* <!-- 퀴즈 --> */}
                <div id="mission_container">
                    <h1>미션은 꿈돌이랑 사진을 찍어서 SNS에 올리기 입니다.</h1> 
                    <p>주의사항 : SNS에 올릴 때 해쉬태그를 추가해주세요.</p>
                    <p id ="hash-tag">#대전여행 #미션여행</p>
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
