import React, {Component} from 'react';
import './adminListView.css';
import axios from 'axios';
import AdminStageModal from './adminStageModal';

class AdminStageList extends Component {

    state = {
        stageList : [],
        currentStage : {},
        stageModalVisible: false,
    }
    
    outStageModal = () => {
        this.setState({
            stageModalVisible: false,
        })
    }

    componentDidMount = () => {
        // 트래픽 데이터들 받아오기
        this.getApi();
    }

    /* 사용자 트래픽 받아오는 함수 */
    getApi = async () => {
        const res = await axios.get("/api/getStageList");
        this.setState({
            stageList : res.data.stageList
        });
    }

    getStageList = async () => {
        const res = await axios.get("/api/getStageList");
        this.setState({
            stageList : res.data.stageList,
            stageModalVisible : false
        });
    }

    onClickStage = (e) => {
        console.log(this.state.stageList[e.target.id]);
        this.setState({
            stageModalVisible : true,
            currentStage : this.state.stageList[e.target.id]
        })
    }

    render(){
        const { stageList, stageModalVisible, currentStage } = this.state; 
        return(
            <div>
                { stageModalVisible ? <AdminStageModal currentStage={currentStage} getStageList={this.getStageList} outModal={this.outStageModal} /> : "" }
                <div className="stage">
                    <h2>스테이지 리스트</h2>
                        {stageList.map((stage, index) => {
                            return (
                            <div className="list_item" onClick={this.onClickStage} id={index} key={stage._id}>
                                {stage.name}
                            </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default AdminStageList;