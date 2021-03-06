import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import profileImg from '../Assets/profilePlaceholder.png';
import gearImg from './gearIcon.png';
import wipLogo from './LogoTree2.png';
import { getUserInfo } from './../../ducks/reducer';
import { connect } from 'react-redux';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            toggleMenu: false,
            toggleGear: false,

        }
        this.toggleMenuFunc = this.toggleMenuFunc.bind(this);
        this.toggleGearFunc = this.toggleGearFunc.bind(this);
        this.toggleAllFalse = this.toggleAllFalse.bind(this);

    }

    toggleMenuFunc() {
        this.setState({
            toggleMenu: !this.state.toggleMenu,
            toggleGear: false,

        })
    }
    toggleGearFunc() {
        this.setState({
            toggleGear: !this.state.toggleGear,
            toggleMenu: false
        })
    }
    toggleAllFalse() {
        if (this.state.toggleGear || this.state.toggleMenu) {
            this.setState({
                toggleGear: false,
                toggleMenu: false
            })
        }

    }
    render() {
        const user = this.props.user;
        return (
            <div className='entireNav'>
                <div className='Nav'>
                    
                    {/* FONT */}
                    <style>@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans+Condensed:300');</style>

                    {/*===| Left Nav |=================================*/}

                    <div className='leftNav navSection'>
                        <Link to='/profile'><img src={user.id ? user.img_url : profileImg} alt='profile' className='profileIcon' /></Link>
                    </div>

                    {/*===| Center Nav |=================================*/}

                    <div className='centerNav navSection'>
                        <img src={wipLogo} alt='W I P' />
                    </div>


                    {/*===| Right Nav |=================================*/}

                    <div className='rightNav navSection'>
                        {/* menu for admin - edit profile - logout */}
                        <div className={this.state.toggleGear ? 'gearMenu rotateGear' : 'gearMenu '} onClick={this.toggleGearFunc}>
                            <img src={gearImg} alt='settings' className='gearIcon' />
                        </div>
                        {/* menu for search */}
                        <div className='menu'>
                            <div className='mobileNav' onClick={this.toggleMenuFunc}>
                                <div className={this.state.toggleMenu ? "bar1 menuIcon" : "menuIcon"}></div>
                                <div className={this.state.toggleMenu ? "bar2 menuIcon" : "menuIcon"}></div>
                                <div className={this.state.toggleMenu ? "bar3 menuIcon" : "menuIcon"}></div>

                            </div>
                        </div>
                    </div>



                </div>
                {/* end of nav bar */}

                <div className={this.state.toggleGear || this.state.toggleMenu ? 'modalHolder' : 'modalHolder hideModal'} onClick={this.toggleAllFalse}>
                {/* <div className={this.state.toggleGear || this.state.toggleMenu ? 'NavHolder darkened' : 'NavHolder'}> */}
                {/*===| Gear Drop Down |=================================*/}
                
                <div className={this.state.toggleGear ? ' displayGearModal gearDropDown ' : 'hideGearModal gearDropDown'}>
                    <h3>ACCOUNT</h3>
                    <Link to='/createuser'>Edit Profile</Link>
                    <Link to='/assessment'>Retake Assessment</Link>
                    <h3>MANAGE</h3>
                    <Link to='/profile'>Edit Favorites</Link>
                    <Link to='/profile'>More. . .</Link>

                    <div className='logoutBtn'>
                        <a href='http://localhost:3005/auth/logout'>Sign out</a>
                    </div>
                </div>
                

                {/*===| Burger Menu Drop down |===========================*/}
                
                <div className={this.state.toggleMenu ? ' displayMenuModal menuDropDown ' : 'hideMenuModal menuDropDown'}>
                    <div className='menuLinkHolder'>
                        <h3>Search</h3>
                        <Link to='/searchcollege'><h4>Colleges</h4></Link>
                        <Link to='/searchjob'><h4>Jobs</h4></Link>
                        <Link to='/searchscholarship'><h4>Scholarships</h4></Link>
                    </div>
                </div>
                {/* </div> */}
                </div>
            </div>  //empty div holding all  
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { getUserInfo })(Nav);
