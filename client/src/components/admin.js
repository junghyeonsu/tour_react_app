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
        alert("changeAutority : true");
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
                {/* <AdminMain /> */}
            </div>
        );
    }
}

export default Admin;