import React, {Component} from 'react';
import {Button, Grid, List, ListItem, ListItemAvatar,ListItemIcon, ListItemText, Avatar, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import { Delete, SportsEsports } from '@material-ui/icons'
import './adminGameList.css';
import axios from 'axios';
import AdminGameModal from './adminGameModal';

class AdminGameList extends Component {

    state = {
        gameList : [],
        stageList : [],
        currentGame : {},
        currentStage : {},
        visible: false,
    }
    
    outModal = () => {
        this.setState({
            visible: false
        })
    }

    componentDidMount = () => {
        // 트래픽 데이터들 받아오기
        this.getApi();
    }

    /* 사용자 트래픽 받아오는 함수 */
    getApi = async () => {
        const res = await axios.get("/admin");
        console.log(res.data.gameList);
        console.log(res.data.stageList);
        this.setState({
            gameList : res.data.gameList,
            stageList : res.data.stageList
        });
    }

    onClickItem = (e) => {
        console.log(this.state.gameList[e.target.id]);
        this.setState({
            visible : true,
            currentGame : this.state.gameList[e.target.id]
        })
    }

    render(){
        const { gameList, stageList, visible, currentGame } = this.state; 
        return(
            <div className="root">
                { visible ? <AdminGameModal currentGame={currentGame} outModal={this.outModal} /> : "" }
                <div className="game">
                    게임 리스트
                        {gameList.map((game, index) => {
                            return (
                            <div onClick={this.onClickItem} id={index} key={game._id} className="list_item">
                                {game._id}
                            </div>
                            );                                         
                        })}
                </div>
                <div className="stage">
                    스테이지 리스트 (관광지)
                        {stageList.map((stage, index) => {
                            return (
                            <div className="list_item" key={stage._id}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <SportsEsports />
                                    </Avatar>
                                </ListItemAvatar>
                                <div>
                                    {stage.title}
                                </div>
                                
                                <button id={stage.number} onClick={this.onClickDeleteButton}>
                                    삭제
                                </button>
                            </div>
                            );                                         
                        })}
                </div>
            </div>
        );
    }
}

// primary={game.title}
// secondary={game.answer}

export default AdminGameList;