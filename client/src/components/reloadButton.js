import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';

class ReloadButton extends Component {
    render(){
        return(
            <>
            <Button
                size="small"
                variant="contained" 
                color="default" 
                onClick={this.props.onClickButton}
            ><ReplayIcon />
            </Button>
            </>
        );
    }
}

export default ReloadButton;