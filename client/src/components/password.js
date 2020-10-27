import React, { Component } from 'react';
import './password.css';
import OtpInput from 'react-otp-input';

class Password extends Component {

    state = { 
        input: '',
        password : '1234',
        authority : false,
    };

    componentDidMount = () => {
        // 디비에서 password 값을 받아와서
        // password state에 넣어줌
    }

    onClickCheckButton = (e) => {
        if(this.state.input === this.state.password) {
            this.props.changeAutority();
        } else {
            alert("비밀번호가 틀렸습니다.");
            this.setState({
                input :'',
            });
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
                        numInputs={4}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        />
                    </div>
                    <button onClick={this.onClickCheckButton}>확인</button>
                </div>
            </div>
        );
    }
}

export default Password;