import React, {Component} from 'react';
import './Login.css';

import Oculus from './Oculus.mp4';
import photo from './LogoTree2.png'


export default class Login extends Component {
    render() {
        return(
            <div className = 'backgroundVideo'>
            <video loop autoPlay><source src = {Oculus} type= "video/mp4" />
            </video>
            <div className = 'wholeScreen'>
            <div className = 'boxes'>
            <div className = 'infoSide'>
            <div className = 'title'>
            <img src = { photo } className = 'logoPhoto'/></div>
            <div className = 'subTitle'>Work-In-Progress</div>
            <div className = 'about'>W.I.P was created to help easen that transition from high school to a college / career and to help give students a purpose in high school.</div>
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