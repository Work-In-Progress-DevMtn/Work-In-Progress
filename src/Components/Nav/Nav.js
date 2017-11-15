import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            toggleMenu: false,
            toggleGear: false,
        }
        this.toggleMenuFunc = this.toggleMenuFunc.bind(this);
        this.toggleGearFunc = this.toggleGearFunc.bind(this);
    }

    toggleMenuFunc() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        }, () => console.log('menu: ' + this.state.toggleMenu))
    }
    toggleGearFunc() {
        this.setState({
            toggleGear: !this.state.toggleGear
        }, () => console.log('Gear: ' + this.state.toggleGear))
    }
    render() {
        return (
            <div className='NavHolder'>
                <div className='Nav'>
                    <div className='sideNav navSection'>
                        <Link to='/profile'>Profile</Link>
                    </div>

                    <div className='centerNav navSection'>
                        <h2>W I P</h2>
                    </div>


                    <div className='sideNav navSection'>
                        {/* menu for admin - edit profile - logout */}
                        <div className='gearMenu' onClick={this.toggleGearFunc}>
                            gear
                    </div>
                        {/* menu for search */}
                        <div className='menu' onClick={this.toggleMenuFunc}>
                            menu
                    </div>
                    </div>
                </div>
                    {/* end of nav bar */}

                    {/* nav dropdown divs */}
                    <div className={this.state.toggleGear ? ' displayModal dropDown ' : 'hideModal'}>
                        <h3>ACCOUNT</h3>
                        <p onClick={'openModaltoEdit'}>Edit Profile</p>
                        <h3>MANAGE</h3>
                        <Link to='/profile'>Edit Favorites</Link>
                        <h3></h3>
                        <Link to='/auth/logout'></Link>
                    </div>


                
                <div className={this.state.toggleMenu ? ' displayModal dropDown ' : 'hideModal'}>
                    <Link to='/searchcollege'>Colleges</Link>
                    <Link to='/searchjob'>Jobs</Link>
                    <Link to='/searchscholarship'>Scholarships</Link>
                </div>
            </div>
        )
    }
}
export default Nav;