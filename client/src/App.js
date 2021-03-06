import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class App extends Component {
  render() {
    axios.post('/api/stocks').then(response => console.log(response.data))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit {} and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
