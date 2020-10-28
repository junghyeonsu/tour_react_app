import React, {Component} from 'react';

class AdminGameAddForm extends Component {

    onClickInsertButton = async e => {
        e.preventDefault();
        const response = await fetch('/api/insert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: this.state.title }),
        });
        console.log(await response.text());
      }
    
      onChangeTitle = (e) => {
        console.log(e.target.value);
        this.setState({
          title : e.target.value
        })
      }

    render(){
        return(
            <div>
                <div>
                게임 추가 입력 창입니다.
                </div>
                <form onSubmit={this.onClickInsertButton}>
                    제목 <input type="text" onChange={this.onChangeTitle} /><br />
                    이미지 <input type="text" /><br />
                    동영상 <input type="text" /><br />
                    글 <input type="text" /><br />
                    정답 <input type="text" /><br />
                <button>추가</button>
                </form>
            </div>
        );
    }
}

export default AdminGameAddForm;