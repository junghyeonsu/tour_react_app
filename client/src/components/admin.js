import React, { Component } from 'react';
import './admin.css';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';

class Admin extends Component {

    state = { otp: '' };

    handleChange = otp => {
        this.setState({ otp });
        console.log(otp);
    };

    render() {
        return(
            <div lassName="app">

  
                <div className="otp_area">
                    <div className="otp_text">
                        비밀번호를 입력해주세요
                    </div>
                    <div className="otp_input">
                        <OtpInput
                        value={this.state.otp}
                        onChange={this.handleChange}
                        numInputs={6}
                        />
                    </div>
                </div>


            </div>
        );
    }
}

export default Admin;