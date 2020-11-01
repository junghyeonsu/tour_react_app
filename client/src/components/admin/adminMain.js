import React, {Component} from 'react';
import './adminMain.css';

import AdminGameAddForm from './adminGameAddForm';
import AdminTrafficView from './adminTrafficView';
import AdminStageAddForm from './adminStageAddForm';
import AdminGameList from './adminGameList';
import AdminStageList from './adminStageList';

class AdminMain extends Component {
  render() {
    return (
      <div className="admin_container">
        <div className="traffic_container">
          <AdminTrafficView />
        </div>
        <div className="form_container">

          <div className="game_Add_Container">
            <AdminGameAddForm />
          </div>

          <div className="stage_Add_Container">
            <AdminStageAddForm />
          </div>
        </div>
          <div className="present_game_list">
            <div>
              <AdminGameList />
            </div>
            <div>
              <AdminStageList />
            </div>
          </div>
      </div>
    );
  }
}

export default AdminMain;