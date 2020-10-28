import React, {Component} from 'react';
import './adminMain.css';

import AdminGameAddForm from './adminGameAddForm';
import AdminTrafficView from './adminTrafficView';
import AdminStageAddForm from './adminStageAddForm';

class AdminMain extends Component {
  render() {
    return (
      <div className="admin_container">
        <div className="traffic_container">
          <AdminTrafficView />
        </div>
        <div className="form_container">
          <div className="present_game_list">
            현재 게임 보여주는 곳
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