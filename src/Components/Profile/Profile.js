import React, { Component } from 'react';
import './Profile.css';
import Nav from '../Nav/Nav.js';
class Profile extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='Profile'>
                <Nav/>
            </div>
        )
    }
}
export default Profile;