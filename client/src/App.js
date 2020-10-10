import React, { Component } from 'react';
import './App.css';

class App extends Component{

  // onClickDeleteButton = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/delete', {
  //     method: 'GET',
  //   });
  //   const body = await response.text();

  //   this.setState({responseToPost: body});
  // }
  
  // onClickInsertButton = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/insert', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });

  //   const body = await response.text();

  //   this.setState({responseToPost: body});
  // }

  render(){
    return (
      <div>
        hi
      </div>
    );
  }
}

export default App;
