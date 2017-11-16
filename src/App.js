import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './Components/Admin/Admin.js';
import Assessment from './Components/Assessment/Assessment.js';
import CreateUser from './Components/CreateUser/CreateUser.js';
import Footer from './Components/Footer/Footer.js';
import Nav from './Components/Nav/Nav.js';
import Login from './Components/Login/Login.js';
import Profile from './Components/Profile/Profile.js';
import SearchCollege from './Components/SearchCollege/SearchCollege.js';
import SearchJob from './Components/SearchJob/SearchJob.js';
import SearchScholarship from './Components/SearchScholarship/SearchScholarship.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
        <Switch>
        <Route component={Login} exact path='/'/>
        <Route component={Admin} path='/admin'/>
        {/* <Route component={Assessment} path='/assessment'/> */}
        <Route component={CreateUser} path='/createuser' />
        <Route component={Profile} path='/profile'/>
        <Route component={SearchCollege} path='/searchcollege' />
        <Route component={SearchJob} path='/searchjob' />
        <Route component={SearchScholarship} path='/searchscholarship' />
    </Switch>
    </Router>
      </div>
    );
  }
}

export default App;
