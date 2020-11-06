import React, { Component } from 'react';
import './admin.css';
import Password from './password';
import AdminMain from './adminMain';

class Admin extends Component {

    state = {
        authority : false,
    };

    changeAutority = () => {
        this.setState({ authority : true });
    }

    render() {

        const {authority} = this.state;

        return(
            <div>
                {
                authority ? 
                <AdminMain /> :
                <Password changeAutority={this.changeAutority} />
                }
            </div>
        );
    }
}

export default Admin;