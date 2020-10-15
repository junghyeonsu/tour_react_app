import React, { Component } from 'react';
import './password.css';
import OtpInput from 'react-otp-input';

class Password extends Component {

    state = { 
        input: '',
        password : '123456',
        authority : false,
    };

    componentDidMount = () => {
        // 디비에서 password 값을 받아와서
        // password state에 넣어줌
    }

    onClickCheckButton = () => {
        if(this.state.input === this.state.password) {
            this.props.changeAutority();
        } else {
            alert("실패");
        }
    }

    onEnterKeyPress = e => {
        if (e.key === "Enter") {
            this.onClickCheckButton();
        }
    }

    handleChange = input => {
        this.setState({ input });
    };

    render() {
        return(
            <div onKeyPress={this.onEnterKeyPress} className="app">
                <div className="otp_area">
                    <div className="otp_text">
                        비밀번호를 입력해주세요
                    </div>
                    <div className="otp_input">
                        <OtpInput
                        value={this.state.input}
                        onChange={this.handleChange}
                        numInputs={6}
                        />
                    </div>
                    <button onClick={this.onClickCheckButton}>확인</button>
                </div>
            </div>
        );
    }
}

export default Password;