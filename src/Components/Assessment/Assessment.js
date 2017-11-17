import React, { Component } from 'react';
import './Assessment.css';
import { Link } from 'react-router-dom';
class Assessment extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
    
 
    render() {
        
        return (
            <div className='Assessment'>
                <div className='contentHolder'>
                    
                    <Link to='/profile'><div className='goToProfileBtn'>go to Profile</div></Link>
                    
                    
                </div>
            </div>
        )
    }
}
export default Assessment;