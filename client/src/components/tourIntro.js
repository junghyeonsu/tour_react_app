import React, { Component } from 'react';
import './tourIntro.css';

class tourIntro extends Component {
    
    state = {
        tour : 
        [
            {
                'title' : '엑스포',
                'image' : ['expo_1.jpg', 'expo_2.jpg', 'expo_3.png', 'expo_4.jpg', 'expo_5.jpg'],
                'explain' : '이곳은 엑스포 입니다.'
            },
            {
                'title' : '하늘공원',
                'image' : ['SkyPark.jpg', 'SkyPark2.jpg', 'SkyPark3.jpg', 'SkyPark4.jpg', 'SkyPark5.jpg'],
                'explain' : '이곳은 하늘공원 입니다.'
            },
        ],
        randomNumber : 0, // 처음에 랜덤값으로 tour state의 배열에 접근해서 보여줌
    }

    // 컴포넌트 마운트전에 randomNumber를 랜덤으로 초기화시켜서 tour들을 보여줌
    componentDidMount() {
        this.setState({
            randomNumber : Math.floor(Math.random() * 2) // 0 ~ 1
        });
    }
    
    render() {
        const {tour, randomNumber} = this.state;
        return (
            <div id="content_tour" className="container">
                <h1 id="tour_title">{tour[randomNumber].title}</h1>

                <div id="content_tour_image_line1">
                    <div className="content_tour_picture">
                        <img id="picture1" className="pictures" src={require(`../images/${tour[randomNumber].image[0]}`)} alt="images"></img>
                    </div>
                    <div className="content_tour_picture">
                        <img id="picture2" className="pictures" src={require(`../images/${tour[randomNumber].image[1]}`)} alt="images"></img>
                    </div>
                </div>
                    
                <div id="content_tour_image_line2">
                    <div className="content_tour_picture">
                        <img id="picture3" className="pictures" src={require(`../images/${tour[randomNumber].image[2]}`)} alt="images"></img>
                    </div>
                    <div className="content_tour_picture">
                        <img id="picture4" className="pictures" src={require(`../images/${tour[randomNumber].image[3]}`)} alt="images"></img>
                    </div>
                </div>
                
                <div id="content_tour_image_line3">
                    <div className="content_tour_picture">
                        <img id="picture5" className="pictures" src={require(`../images/${tour[randomNumber].image[4]}`)} alt="images"></img>
                    </div>
                </div>

                <div id="content_tour_intro">
                    {tour[randomNumber].explain}
                </div>
            </div>

        )
    }
}

export default tourIntro;
