import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='Nav'>
                <div className='sideNav leftNav'>

                </div>
                <Link to='/'></Link>
                <Link to='/admin'></Link>
                <Link to='assessment'></Link>
                <Link to=''></Link>
                <Link to=''></Link>

                <div className='sideNav rightNav'>
                    {/* menu for admin - edit profile - logout */}
                    <div className='gearMenu'>
                        
                    </div>    
                    {/* menu for search */}
                    <div className='menu'>
                        <Link to='/searchcollege'></Link>
                        <Link to='/searchjob'></Link>
                        <Link to='/searchscholarship'></Link>
                    </div>
                </div>

            </div>
        )
    }
}
export default Nav;