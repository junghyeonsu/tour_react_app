import React, {Component} from 'react';
import './adminTrafficView.css';
import axios from 'axios';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
  } from 'recharts';

class CustomizedAxisTick extends Component {
    render() {
      const {
        x, y, payload,
      } = this.props;
  
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-90)">{payload.value}</text>
        </g>
      );
    }
}

class AdminTrafficView extends Component {

    state = {
        data : [],
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

    render(){
        const {data} = this.state;
        return(
            <>
                <ComposedChart
                    layout="vertical"
                    width={360}
                    height={300}
                    data={data}
                    margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="stage" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="traffic" barSize={20} fill="#413ea0" />
                </ComposedChart>  
            </>
        );
    }
}

export default AdminTrafficView;