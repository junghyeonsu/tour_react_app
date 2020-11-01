import React, {Component} from 'react';
import './adminListView.css';
import axios from 'axios';
import AdminGameModal from './adminGameModal';

class AdminGameList extends Component {

    state = {
        gameList : [],
        currentGame : {},
        gameModalVisible: false,
    }
    
    outGameModal = () => {
        this.setState({
            gameModalVisible: false,
        })
    }

    componentDidMount = () => {
        // 트래픽 데이터들 받아오기
        this.getApi();
    }

    /* 사용자 트래픽 받아오는 함수 */
    getApi = async () => {
        const res = await axios.get("/api/getGameList");
        console.log(res.data.gameList);
        this.setState({
            gameList : res.data.gameList,
            gameModalVisible: false,
        });
    }

    onClickGame = (e) => {
        console.log(this.state.gameList[e.target.id]);
        this.setState({
            gameModalVisible : true,
            currentGame : this.state.gameList[e.target.id]
        })
    }


    render(){
        const { gameList, gameModalVisible, currentGame } = this.state; 
        return(
            <div>
                { gameModalVisible ? <AdminGameModal currentGame={currentGame} getApi={this.getApi} outModal={this.outGameModal} /> : "" }
                <div className="game">
                    <h2>
                        게임 리스트
                    </h2>
                        {gameList.map((game, index) => {
                            return (
                            <div onClick={this.onClickGame} id={index} key={game._id} className="list_item">
                                {game._id}
                            </div>
                            );                                         
                        })}
                </div>
            </div>
        );
    }
}

export default AdminGameList;