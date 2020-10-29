import React, {Component} from 'react';
import './adminTrafficView.css';
import axios from 'axios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    // CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";

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
            </>
        );
    }
}

export default AdminTrafficView;