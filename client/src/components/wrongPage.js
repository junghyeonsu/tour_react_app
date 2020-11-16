import React, {Component} from 'react'

const wrongStyle = {
    display : "flex",
    textAlign : "center",
    height : "100vh",
}

const pStyle = {
    margin : "auto"
}

class WrongPage extends Component {
    render(){
        return(
            <div style={wrongStyle}> 
                <div style={pStyle}>
                    <strong>
                        <h2>잘못된 접근입니다.</h2>
                        <br />
                        QR코드를 다시 찍어주세요.
                    </strong>
                </div>
            </div>
        );
    }
}

export default WrongPage;