import React, { Component } from 'react';
import './Profile.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios'
class Profile extends Component{ 
    constructor(){
        super();
        
 
        this.state = {
            
        }
    }
    componentWillMount(){
        axios.get('/auth/me').then(res=> {
            console.log(res.data);
            if(res.data.is_admin){
                window.location.assign('http://localhost:3000/admin')
            }else{
                if(res.data.new_user){
                    window.location.assign('http://localhost:3000/createuser')
                }
            }
        })
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