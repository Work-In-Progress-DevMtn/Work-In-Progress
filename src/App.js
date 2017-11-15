import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import Nav from './Components/Nav/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
