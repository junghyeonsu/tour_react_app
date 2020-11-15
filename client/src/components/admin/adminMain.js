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

        <div className="game_list_container">
          <AdminGameList />
        </div>

        <div className="game_Add_Container">
          <AdminGameAddForm />
        </div>

        <div className="stage_list_container">
          <AdminStageList />
        </div>

        <div className="stage_Add_Container">
          <AdminStageAddForm />
        </div>

      </div>
    );
  }
}

export default AdminMain;