import React, { Component } from 'react';
import './tourIntro.css';

class tourIntro extends Component {
    render() {
        return (
            <div id="content_tour" class="container">
                <h1 id="tour_title">관광지 제목</h1>

                <div id="content_tour_image_line1">
                    <div class="content_tour_picture">
                        <img id="picture1" class="pictures" src={require('../images/expo_1.jpg')} alt="images"></img>
                    </div>
                    <div class="content_tour_picture">
                        <img id="picture2" class="pictures" src={require('../images/expo_2.jpg')} alt="images"></img>
                    </div>
                </div>
                    
                <div id="content_tour_image_line2">
                    <div class="content_tour_picture">
                        <img id="picture3" class="pictures" src={require('../images/expo_3.png')} alt="images"></img>
                    </div>
                    <div class="content_tour_picture">
                        <img id="picture4" class="pictures" src={require('../images/expo_4.jpg')} alt="images"></img>
                    </div>
                </div>
                
                <div id="content_tour_image_line3">
                    <div class="content_tour_picture">
                        <img id="picture5" class="pictures" src={require('../images/expo_5.jpg')} alt="images"></img>
                    </div>
                </div>

                <div id="content_tour_intro">
                    {/* <!-- 설명 들어가는 부분 --> */}
                </div>
            </div>

        )
    }
}

export default tourIntro;
