import React, {Component} from 'react';
import './Login.css';


export default class Login extends Component {
    render() {
        return(
            <a href={ process.env.REACT_APP_LOGIN }>
                <button>Log In</button>
            </a>
        )
    }
}