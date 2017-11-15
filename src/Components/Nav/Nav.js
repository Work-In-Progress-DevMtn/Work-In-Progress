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
                
                <Link to='/admin'></Link>
                <Link to='assessment'></Link>
                

                <div className='sideNav rightNav'>
                    {/* menu for admin - edit profile - logout */}
                    <div className='gearMenu'>
                        <h3>ACCOUNT</h3>
                        <p onClick={'openModaltoEdit'}>Edit Profile</p>
                        <h3>MANAGE</h3>
                        <Link to='/profile'>Edit Favorites</Link>
                        <h3></h3>
                        <Link to='/auth/logout'></Link>
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