import React, {Component} from 'react';
import './adminMain.css';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    // CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

const data = [
    {
        stage : '수변공원',
        traffic : 65
    },
    {
        stage : '엑스포',
        traffic : 105
    },
    {
        stage : '성심당',
        traffic : 430
    },
    {
        stage : '과학공원',
        traffic : 97
    },
];


class AdminMain extends Component {
  
  componentDidMount = () => {
    // 트래픽 데이터들 받아오기
  }
  
  render() {
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
                <div>
                  게임 추가 입력 창
                </div>
                <form>
                  제목 <input type="text" /><br />
                  이미지 <input type="text" /><br />
                  동영상 <input type="text" /><br />
                  글 <input type="text" /><br />
                  정답 <input type="text" /><br />
                  <button>추가</button>
                </form>
              </div>

          </div>
        );
    }
}

export default AdminMain;