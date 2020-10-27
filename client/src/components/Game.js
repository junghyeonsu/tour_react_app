import React, {Component} from 'react';
import gameStore from '../store/store';

class Game extends Component {
    state = {
        tour : 
        [
            {
                'image' : ['Game1.png','Game2.png','Game3.png','Game4.png','Game5.png'
                ,'Game6.png','Game7.png','Game8.png','Game9.png','Game10.png'],
                'answer' : [1,2,3,4,5,6,7,8,9,10]
            },
            
        ],
        randomNumber : 0, // 처음에 랜덤값으로 tour state의 배열에 접근해서 보여줌
    }
    componentDidMount() {
        
    }
    render = () => {
        const {title, text, image, video, answer} = this.props;
        return(
            <div>
                <div>
                    {title}
                </div>
                <div>
                    <img src={image} alt="image" />
                </div>
                <div>
                    {/* 비디오 */}
                </div>
                <div>
                    {text}
                </div>
                {/* <img src={require(`./게임/${this.state.tour[0].image[this.state.randomNumber]}`)}></img>
                <input type='hidden' id = "correctAnswer" value = {this.state.tour[0].answer[this.state.randomNumber]} /> */}
            </div>
        )
    }
}

export default Game;