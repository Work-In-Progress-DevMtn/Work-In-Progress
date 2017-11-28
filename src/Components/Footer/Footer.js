import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                {/* ****************LEFT SECTION******************************* */}
                <div className='leftSection'>
                    <div className='leftTitle'>
                        <h2>CONNECT WITH US</h2>
                    </div>
                    <div className='leftContent'>
                        <a href='https://www.linkedin.com/'>LinkedInIcon</a>
                        <a href='https://www.instagram.com/'>InstaIcon</a>
                        <a href='https://www.facebook.com/'>FacebookIcon</a>
                    </div>
                </div>
                {/* ****************MIDDLE SECTION******************************* */}
                <div className='midSection'>
                    <div className='midTitle'>
                        <h2>COMMITTED TO YOUR PROGRESS</h2>
                    </div>
                    <div className='midContent'>
                        <p>The transition between high school and college, employment and career choice is continually becoming more and more difficult.</p>
                        <p>W.I.P. is designed to create a smooth pathway toward reaching individual goals by providing crucial information and tools to make progress toward your future.</p>
                    </div>
                </div>
                {/* ****************RIGHT SECTION******************************* */}
                <div className='rightSection'>
                    <div className='rightTitle'>
                        <h2>Explore</h2>
                    </div>
                    <div className='rightContent'>
                        <a href="https://www.glassdoor.com/">Explore Careers</a>
                        <a href="https://www.scholarships.com/">Explore Scholarships</a>
                        <a href="https://www.linkedin.com/">Complete your LinkedIn</a>
                        <a href="https://www.traitify.com/">Traitify Career Assessment</a>
                        <a>Edit Favorites</a>
                    </div>


                </div>
                </div>
                )
    }
}
export default Footer;






{/* <p>The transition between high school and college, employment and career choice is continually becoming more and more difficult.
</p>
<p>W.I.P. is designed to create a smooth pathway toward reaching individual goals by providing crucial information and tools to make progress toward your future.
    </p> */}