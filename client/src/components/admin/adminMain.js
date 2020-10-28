import React, {Component} from 'react';
import './adminMain.css';

import AdminGameAddForm from './adminGameAddForm';
import AdminTrafficView from './adminTrafficView';
import AdminStageAddForm from './adminStageAddForm';
import AdminGameList from './adminGameList';

class AdminMain extends Component {
  render() {
    return (
      <div className="admin_container">
        <div className="traffic_container">
          <AdminTrafficView />
        </div>
        <div className="form_container">
          <div className="present_game_list">
            게임 리스트
            <AdminGameList />
          </div>

          <div className="game_Add_Container">
            <AdminGameAddForm />
          </div>

          <div className="stage_Add_Container">
            <AdminStageAddForm />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminMain;