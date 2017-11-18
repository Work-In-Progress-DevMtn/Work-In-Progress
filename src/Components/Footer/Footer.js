import React, { Component } from 'react';
import './Footer.css';
 
class Footer extends Component{ 
    render(){
        return (
            <div className='Footer'>
                <div className='footerItemsHolder'>
                    <div className='Links footerSection'>    
                        <a>Link</a>
                        <a>Link</a>
                        <a>Link</a>
                    </div>
                    <div className='more footerSection'> more</div>    
                    <div className='extra stuff footerSection'> extra</div>    
                </div>    
            </div>
        )
    }
}
export default Footer;