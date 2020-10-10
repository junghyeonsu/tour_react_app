import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Mission from './components/mission';
import TourIntro from './components/tourIntro';

class App extends Component{
  render(){
    return (
      <div>
        <Main />
        <TourIntro />
      </div>
    );
  }
}

export default App;
