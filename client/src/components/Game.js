import React, {Component} from 'react';
import axios from 'axios';
import VideoPlay from './VideoPlay';

class Game extends Component {
    state = {
        gameList : [],
        randomNumber : 1
    }

    async componentDidMount(){
        const res = await axios.get("/api/getGameList");
       
        this.setState({
            gameList : res.data.gameList,
            // randomNumber : Math.floor(Math.random() * this.props.List.length)
        });
        this.props.ChangeThis();
    }
    
    render = () => {
        
        const {gameList, randomNumber} = this.state;
        return(
           <div>
            {gameList.length === 0 ? '' :
            <div>
                  
                {gameList[randomNumber].type == "객관식" ? 
                <div>
                    {/* 객관식 */}
                    <input type='hidden' value="객관식" id ="Question"/>
                    {gameList[randomNumber].title}
                    {gameList[randomNumber].image == "" ? '' : <img src={gameList[randomNumber].image} />}
                    {gameList[randomNumber].video == "" ? '' : <VideoPlay id={'9vkZVikwTAU'} startTime={0} seek= {{게임설명:16,퀴즈설명:32}} count = {2}/>}
                    <p>
                        {gameList[randomNumber].question}
                    </p>
                    <div>
                    {gameList[randomNumber].choice.map((i) => {
                        return(
                            <div>
                            <input type='radio' name="gener" className="checking" value={i} onChange={this.props.selectChange}/>{i}<br />
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
                    {gameList[randomNumber].title}
                    {gameList[randomNumber].image == "" ? '' : <img src={gameList[randomNumber].image} />}
                    {gameList[randomNumber].video == "" ? '' : <VideoPlay id={'9vkZVikwTAU'} startTime={0} />}
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