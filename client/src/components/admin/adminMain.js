import React, {Component} from 'react';
import './adminMain.css';

import axios from 'axios';

import AdminGameAddForm from './adminGameAddForm';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    // CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

class AdminMain extends Component {
  
  state = {
    data : [],
    title : "",
  }

  componentDidMount = () => {
    // 트래픽 데이터들 받아오기
    this.getTrafficApi();
  }

  /* 사용자 트래픽 받아오는 함수 */
  getTrafficApi = async () => {
    const res = await axios.get("/api/getStageInfo");
    res.data.map(obj => {  
      this.setState({
        data : this.state.data.concat(obj)
      });
    })
  }

  render() {
    const {data} = this.state;
    return (
      <div className="admin_container">
          <div className="div_test">
          관리자 페이지
          <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
                bottom: 5,
            }}
          >
          <XAxis dataKey="stage" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="traffic" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="present_game_list">
          현재 게임 보여주는 곳
        </div>

        <div className="game_Add_Container">
          <AdminGameAddForm />
        </div>

        <div className="stage_Add_Container">
            스테이지 추가하는 곳 
        </div>
      </div>
    );
  }
}

export default AdminMain;