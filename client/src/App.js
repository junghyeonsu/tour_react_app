import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Mains from './components/main';
import Mission from './components/mission';
import Admin from './components/admin/admin';
import Quiz from './components/quiz';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 버튼 클릭 시 라우팅 해주고 싶으면
// <Link to="/위치" onClick="실행시키고싶은 함수" />
// 이런식으로 쓰면 됨 
import { Link } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <CookiesProvider>
      <Router>
        

        <Switch>
          {/*   /로 이동하면 Main 컴포넌트를 띄움   */}
          <Route exact path="/intro" component={Intro} />
          <Route exact path="/:stage/intro/:quiz" component={Intro} />
          {/*   /mission로 이동하면 Mission 컴포넌트를 띄움   */}
          <Route exact path="/mission" component={Mission} />
          {/* 어드민 홈페이지 테스트 */}
          <Route exact path="/admin" component={Admin} />

          {/*   /quiz로 이동하면 Mission 컴포넌트를 띄움   */}
          <Route exact path="/quiz" component={Quiz} />

          <Route exact path="/:Stage/:Quiz" component={Mains} />
        </Switch>
      </Router>
      </CookiesProvider>
    );
  }
}

export default App;