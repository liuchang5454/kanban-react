import React, { Component } from 'react';
import Boards from "./Containers/Boards"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boards />
      </div>
    );
  }
}

export default App;
