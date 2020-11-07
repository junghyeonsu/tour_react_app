import React, {Component} from 'react';
import './adminListView.css';
import axios from 'axios';
import AdminShortModal from './adminShortModal';
import AdminMultipleModal from './adminMultipleModal';

class AdminGameList extends Component {

    state = {
        gameList : [],
        currentGame : {},
        shortModalVisible: false,
        multipleModalVisible : false,
    }
    
    outGameModal = () => {
        this.setState({
            shortModalVisible: false,
            multipleModalVisible : false,
        })
    }

    componentDidMount = () => {
        // 트래픽 데이터들 받아오기
        this.getApi();
    }

    /* 사용자 트래픽 받아오는 함수 */
    getApi = async () => {
        const res = await axios.get("/api/getGameList");
        this.setState({
            gameList : res.data.gameList,
            shortModalVisible: false,
            multipleModalVisible: false,
        });
    }

    onClickMultipleGame = (e) => {
        this.setState({
            multipleModalVisible : true,
            currentGame : this.state.gameList[e.target.id]
        })
    }

    onClickShortGame = (e) => {
        this.setState({
            shortModalVisible : true,
            currentGame : this.state.gameList[e.target.id]
        })
    }

    render(){
        const { gameList, multipleModalVisible, shortModalVisible, currentGame } = this.state; 
        return(
            <div>
                { shortModalVisible ? <AdminShortModal currentGame={currentGame} getApi={this.getApi} outModal={this.outGameModal} /> : "" }
                { multipleModalVisible ? <AdminMultipleModal currentGame={currentGame} getApi={this.getApi} outModal={this.outGameModal} /> : "" }
                <div className="game">
                    <h2>
                        게임 리스트
                    </h2>
                        {gameList.map((game, index) => {
                            if(game.type == "객관식") {
                                return (
                                    <div onClick={this.onClickMultipleGame} id={index} key={game._id} className="list_item">
                                        ({game.type}) {game.title}
                                    </div>
                                );  
                            } else if (game.type == "주관식") {
                                return (
                                    <div onClick={this.onClickShortGame} id={index} key={game._id} className="list_item">
                                        ({game.type}) {game.title}
                                    </div>
                                );  
                            }                                   
                        })}
                </div>
            </div>
        );
    }
}

export default AdminGameList;