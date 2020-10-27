import React, {Component} from 'react';
import './adminMain.css';

import Game from './Game';
import { inject, observer } from 'mobx-react';

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

@inject('store')
@observer
class AdminMain extends Component {
  
  componentDidMount = () => {
    store.setRandomGameNumber;
    console.log(store.randomGameNumber);
    // 트래픽 데이터들 받아오기
  }
  
  render() {
    const { store } = this.props;
        return (
          <div>
              {/* <div className="div_test">
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
            </div> */}

              <div>
                <Game title="게임을 맞춰보세요" image='Game1.png' text="이거는 도대체 무슨 게임일까요?" />
              </div>
              <div>
                {store.randomGameNumber}
              </div>
          </div>
        );
    }
}

export default AdminMain;