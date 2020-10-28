import React, {Component} from 'react';
import { 
    Grid, List, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton
 } from '@material-ui/core';
import {
    Delete, SportsEsports
} from '@material-ui/icons'


const gameList = [
    {
        title : "game1",
        answer : "game1's answer"
    },
    {
        title : "game2",
        answer : "game2's answer"
    },
    {
        title : "game3",
        answer : "game3's answer"
    },
    {
        title : "game4",
        answer : "game4's answer"
    },
]


class AdminGameList extends Component {
    
    componentDidMount = () => {
        // 게임 LIST 받아오기 API
    }

    // generate = (list ,element) => {
    //     return list.map((value) =>
    //       React.cloneElement(element, {
    //         key: value,
    //       }),
    //     );
    // }

    render(){
        return(
            <>  
            <Grid item xs={12} md={6}>
                <List>
                    {/* {gameList.map(game => {
                        React.cloneElement(
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <SportsEsports />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={game.title}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>                        
                        );
                    })} */}
                </List>
            </Grid>
            </>
        );
    }
}

// primary={game.title}
// secondary={game.answer}

export default AdminGameList;