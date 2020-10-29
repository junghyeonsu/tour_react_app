import React, {Component} from 'react';
import { 
   Button, Grid, List, ListItem, ListItemAvatar,ListItemIcon, ListItemText, Avatar, ListItemSecondaryAction, IconButton
 } from '@material-ui/core';
import {
    Delete, SportsEsports
} from '@material-ui/icons'
import './adminGameList.css';

const gameList = [
    {
        number : 1,
        title : "game1",
        answer : "game1's answer"
    },
    {
        number : 2,
        title : "game2",
        answer : "game2's answer"
    },
    {
        number : 3,
        title : "game3",
        answer : "game3's answer"
    },
    {
        number : 4,
        title : "game4",
        answer : "game4's answer"
    },
]


class AdminGameList extends Component {
    
    componentDidMount = () => {
        // 게임 LIST 받아오기 API
    }

    onClickDeleteButton = (e) => {
        console.log(e.target.id);
    }

    render(){
        return(
            <div className="root">
                <Grid>
                    <List>
                        {gameList.map(game => {
                            return (
                            <ListItem>

                                <ListItemAvatar>
                                    <Avatar>
                                        <SportsEsports />
                                    </Avatar>
                                </ListItemAvatar>

                                <ListItemText 
                                    primary={game.title} 
                                    secondary={game.answer}    
                                />
                                
                                <button id={game.number} onClick={this.onClickDeleteButton}>
                                    삭제
                                </button>

                            </ListItem>
                            );                                         
                        })}
                    </List>    
                </Grid>  
            </div>
        );
    }
}

// primary={game.title}
// secondary={game.answer}

export default AdminGameList;