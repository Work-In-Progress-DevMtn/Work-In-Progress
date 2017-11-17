import React, { Component } from 'react';
import './Footer.css';
 
class Footer extends Component{ 
    render(){
        return (
            <div className='Footer'>
                <div className='footerItemsHolder'>
                    <div className='Links'></div>
                    <div className='more'></div>    
                    <div className='extra stuff'></div>    
                </div>    
            </div>
        )
    }
}
export default Footer;