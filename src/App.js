import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {router}
      </div>
    );
  }
}

export default App;
