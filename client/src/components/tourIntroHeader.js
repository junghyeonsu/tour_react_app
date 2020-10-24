import React, { Component } from 'react';
import './tourIntroHeader.css';
import axios from 'axios';

class tourIntroHeader extends Component {
    
    state = {
        
    }

  async componentDidMount(){
    console.log("시작");
    const response = await axios.get('/getTourInfo');
    console.log(response);
    console.log("끝");
  }

    render() {
        return (
            <div id="content_tour" className="container">
               한국관광공사 API
            </div>
        )
    }
}

export default tourIntroHeader;
