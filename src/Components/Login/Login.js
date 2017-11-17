import React, {Component} from 'react';
import './Login.css';


export default class Login extends Component {
    render() {
        return(
            <div className = 'wholeScreen'>
                <div className = 'loginBox'>
                <div className ="infoBox">WELCOME TO W.I.P.</div>
            <a href={ process.env.REACT_APP_LOGIN }>
                <button className = "loginButton">Log In</button>
            </a>
            </div>
            </div>
        )
    }
}