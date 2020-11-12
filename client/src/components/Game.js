import React, {Component} from 'react';
import axios from 'axios';
import VideoPlay from './VideoPlay';
import './game.css';

class Game extends Component {
    state = {
        gameList : [],
        randomNumber : 0
    }

    async componentDidMount(){
        const res = await axios.get("/api/getGameList");
        this.setState({
            gameList : res.data.gameList,
            randomNumber : this.props.randomNumber
        });
        this.props.ChangeThis();
        console.log("Game Random Number: ",this.state.randomNumber);
        console.log("Game:",this.state.gameList);
    }
    
    render = () => {
        
        const {gameList, randomNumber} = this.state;
        return(
           <div className="quiz_container">
            {gameList.length === 0 ? '' :
            <div>
                  
                {gameList[randomNumber].type == "객관식" ? 
                <div>
                    {/* 객관식 */}
                    <input type='hidden' value="객관식" id ="Question"/>
                    <h2>{gameList[randomNumber].title}</h2>
                    {gameList[randomNumber].image == "" ? '' : <img src={gameList[randomNumber].image} />}
                    {gameList[randomNumber].video == "" ? '' : <VideoPlay id={gameList[randomNumber].video} startTime={0} seek= {{게임설명:16,퀴즈설명:32}} count = {2}/>}
                    {gameList[randomNumber].text == ""  ? '' : <div>{gameList[randomNumber].text}</div>}
                    <p>
                        {gameList[randomNumber].question}
                    </p>
                    <div>
                    {gameList[randomNumber].choice.map((key,i) => {
                        return(
                            <div key={i}>
                            <input type='radio' name="gener" className="checking" value={i+1} onChange={this.props.selectChange}/>
                            {gameList[randomNumber].choice[i]}<br />
                            </div>
                        )
                    })}
                    </div>  
                    <input type='hidden' id = "correctAnswer" value = {gameList[randomNumber].answer} />
                </div>
                    :
                <div>
                    {/* 주관식 */}
                    <input type='hidden' value="주관식" id ="Question"/>
                    <h2>{gameList[randomNumber].title}</h2>
                    {gameList[randomNumber].image == "" ? '' : <img src={gameList[randomNumber].image} />}
                    {gameList[randomNumber].video == "" ? '' : <VideoPlay id={gameList[randomNumber].video} startTime={0} />}
                    {gameList[randomNumber].text == ""  ? '' : <div>{gameList[randomNumber].text}</div>}
                    <p>
                        {gameList[randomNumber].question}
                    </p>
                    <input type='hidden' id = "correctAnswer" value = {gameList[randomNumber].answer} />
                </div>
            }

            </div>
            }
            </div>
        )
    }
}

export default Game;