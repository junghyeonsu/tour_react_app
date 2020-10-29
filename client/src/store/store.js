import { observable, action } from "mobx";
import { autobind } from 'core-decorators';

/* @observable = state */
/*  @action = function */
@autobind
export default class gameStore {
   /* 관리자가 추가 및 삭제 할 때 바뀌는 배열 */
  @observable gameArray = [
    {   
        title : "",
        image : "",
        video : "",
        text : "",
        answer : "",
    },
  ];

  /* 몇 번째 게임을 보여줄건지 정해주는 번호 */
  @observable randomGameNumber = 10;
  
  /* 몇 번째 게임을 보여줄건지 랜덤으로 숫자를 정하는 함수 */
  @action setRandomGameNumber = () => {
    this.randomGameNumber = Math.floor(Math.random() * 10); 
  }
}