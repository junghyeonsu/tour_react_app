import React, {Component} from 'react';
import './adminGameAddForm.css';
import MultipleChoice from './quiztype/multipleChoice';
import ShortAnswer from './quiztype/shortAnswer';

class AdminGameAddForm extends Component {

    state = {
      formSelect : "객관식"
    }

    onSelectMultipleChoice = () => {
      this.setState({
        formSelect : "객관식"
      })
    }

    onSelectOneChoice = () => {
      this.setState({
        formSelect : "주관식"
      })
    }  

    render(){
      const { formSelect } = this.state;
      return(
          <div>
              <h2>
              게임 추가 입력 창
              </h2>
              <input type="radio" defaultChecked name="check" onClick={this.onSelectMultipleChoice} value="객관식" />객관식
              <input type="radio" name="check" onClick={this.onSelectOneChoice} value="주관식" />주관식
              {formSelect == "객관식" ? <MultipleChoice /> : <ShortAnswer />}
          </div>
      );
    }
}

export default AdminGameAddForm;