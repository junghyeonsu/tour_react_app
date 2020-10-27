import React from 'react';

class Game extends React.Component{

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
        this.setState({
            randomNumber : Math.floor(Math.random() * 10) // 0 ~ 1
        });
    }
    render(){
        
        return(
            <div>
                <img src={require(`./게임/${this.state.tour[0].image[this.state.randomNumber]}`)}></img>
                <input type='hidden' id = "correctAnswer" value = {this.state.tour[0].answer[this.state.randomNumber]} />
            </div>
        )
    }
}

export default Game;