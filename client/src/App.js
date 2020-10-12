import React, { Component } from 'react';
import './App.css';

import Main from './components/main';
import Mission from './components/mission';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 버튼 클릭 시 라우팅 해주고 싶으면
// <Link to="/위치" onClick="실행시키고싶은 함수" />
// 이런식으로 쓰면 됨 
import { Link } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/mission" component={Mission} />
        </Switch>
      </Router>
    );
  }
}

export default App;
