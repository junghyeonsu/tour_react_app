import { observable, action } from "mobx";
import { autobind } from 'core-decorators';
import axios from 'axios';

/* @observable = state */
/*  @action = function */
@autobind
export default class stageStore {

    @observable stageList = [];
    @observable currentStage = {};
    @observable stageModalVisible = false;

    // 모달 끌 때
    @action outStageModal = () => {
        this.stageModalVisible = false;
    };

    /* 사용자 트래픽 받아오는 함수 */
    @action getApi = async () => {
        const res = await axios.get("/api/getStageList");
        return res.data.stageList;
    };

    @action onClickStage = (e) => {
        this.stageModalVisible = true;
        this.currentStage = this.stageList[e.target.id];
    }

}