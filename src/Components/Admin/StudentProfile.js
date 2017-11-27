import React, { Component } from 'react';
// import './StudentProfile.css';
import { Link } from 'react-router-dom';


class StudentProfile extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
    
 
    render() {
        
        return (
            <div className='StudentProfile'>
                <div className='contentHolder'>
                    
                    <Link to='/profile'><div className='goToProfileBtn'>go to Profile</div></Link>
                    
                    
                </div>
            </div>
        )
    }
}
export default StudentProfile;