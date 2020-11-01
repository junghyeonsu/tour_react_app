// import React, {Component} from 'react';

// class Game extends Component {
//     state = {
        
//     }

//     componentDidMount() {
//         // 게임데이터를 불러오고 그중에서 랜덤으로 뽑아주기
//     }
    
//     render = () => {
//         const {title, text, image, video, answer} = this.props;
//         return(
//             <div>
//                 <div>
//                     {title}
//                 </div>
//                 <div>
//                     <img src={image} alt="image" />
//                 </div>
//                 <div>
//                     {/* 비디오 */}
//                 </div>
//                 <div>
//                     {text}
//                 </div>
//                 {/* <img src={require(`./게임/${this.state.tour[0].image[this.state.randomNumber]}`)}></img>
//                 <input type='hidden' id = "correctAnswer" value = {this.state.tour[0].answer[this.state.randomNumber]} /> */}
//             </div>
//         )
//     }
// }

// export default Game;
import React from 'react';

class Game extends React.PureComponent{
    
    state = {
        tour : 
        [
            {
                'image' : ['Game1.png','Game2.png','Game3.png','Game4.png','Game5.png'
                          ,'Game6.png','Game7.png','Game8.png','Game9.png','Game10.png'],
                'answer' : [1,2,3,4,5,6,7,8,9,10]
            },
           
        ],
        randomNumber :  Math.floor(Math.random() * this.props.List.length)// 처음에 랜덤값으로 tour state의 배열에 접근해서 보여줌
    }
    componentDidMount() {
        
    }
    // componentDidMount = async () => {
    //     const response = await fetch(this.props.url,{
    //       method : 'GET',
    //       headers : {
    //         'Content-Type': 'application/json',
    //       }
    //     })
        
    //     const body = await response.json();
    //     this.setState({
    //         randomNumber : Math.floor(Math.random() * 10),
    //         answer : body.gameList // 0 ~ 1
    //     });
    
    //     console.log(document.getElementById('correctAnswer').value);
    //   }
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