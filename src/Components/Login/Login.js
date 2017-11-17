import React, {Component} from 'react';
import './Login.css';
import logo from './WIP LOGO WHITE.png';
import Oculus from './Oculus.mp4';


export default class Login extends Component {
    render() {
        return(
            <div className = 'backgroundVideo'>
            <video loop autoPlay><source src = {Oculus} type= "video/mp4" />
            </video>
            <div className = 'wholeScreen'>
            <div className = 'boxes'>
            <div className = 'infoSide'>
            <div className = 'title'>W.I.P.</div>
            <div className = 'subTitle'>Work-In-Progress</div>
            </div>
            
            <div className = 'loginSide'>
            <a href={ process.env.REACT_APP_LOGIN }>
            <button className = 'loginButton'>L o g i n / S i g n  U p</button>
            </a></div>
            </div>
           
            </div>
            
            </div>
        )
    }
}