import React, {Component} from 'react';

class Game extends Component {
    state = {
        
    }

    componentDidMount() {
        // 게임데이터를 불러오고 그중에서 랜덤으로 뽑아주기
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