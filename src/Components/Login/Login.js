import React, {Component} from 'react';
import './Login.css';


export default class Login extends Component {
    render() {
        return(
            <div className = 'wholeScreen'>
                <div className = 'loginBox'>
            <a href={ process.env.REACT_APP_LOGIN }>
                <button>Log In</button>
            </a>
            </div>
            </div>
        )
    }
}