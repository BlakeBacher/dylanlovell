import React, { Component } from 'react';
import face from './face.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div fontSize='50px'>yo pleb</div>
        <img src={face} alt='' height='80px'></img>
      </div>
    );
  }
}

export default App;
