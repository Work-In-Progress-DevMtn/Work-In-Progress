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
                        <a href='https://www.linkedin.com/' target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                        <a href='https://www.instagram.com/' target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href='https://www.facebook.com/' target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i>
</a>
                    </div>
                </div>
                {/* ****************MIDDLE SECTION******************************* */}
                <div className='midSection'>
                    <div className='midTitle'>
                        <h2>COMMITTED TO YOUR PROGRESS</h2>
                    </div>
                    <div className='midContent'>
                        <p>The transition between high school and college, employment and career choice is continually becoming more and more difficult.</p>
                        <p>W.I.P. provides a clean and personalized progression tracker to help individuals reach their goals by providing crucial information and modern tools.</p>
                    </div>
                </div>
                {/* ****************RIGHT SECTION******************************* */}
                <div className='rightSection'>
                    <div className='rightTitle'>
                        <h2>Explore</h2>
                    </div>
                    <div className='rightContent'>
                        <a href="https://www.glassdoor.com/" target="_blank">Explore Careers</a>
                        <a href="https://www.scholarships.com/" target="_blank">Explore Scholarships</a>
                        <a href="https://www.linkedin.com/" target="_blank">Complete your LinkedIn</a>
                        <a href="https://www.traitify.com/" target="_blank">Traitify Career Assessment</a>
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