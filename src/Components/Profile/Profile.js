import React, { Component } from 'react';
import { getUserInfo } from './../../ducks/reducer';
import { connect } from 'react-redux';
import './Profile.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import profileImg from '../Assets/profilePlaceholder.png';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {



        }
    }

    componentDidMount() {
        this.props.getUserInfo();

    }

    render() {
        const user = this.props.user;
        console.log(user)
        return (
            <div className='Profile'>
                {/* ----------FONT-----------*/}
                <style>@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans+Condensed:300');</style>

                <Nav />
                <div className='profileContentHolder'>
                    <div className='profileContent'>

                        {/*===| Left profile section |=================================*/}

                        <div className='progressDivHolder profileSideSection'>
                            <div className='sideSectionHeader'><h4>Progress</h4></div>
                        </div>


                        {/*===| Center Profile Section |=================================*/}
                        <div className='centerProfileHolder'>
                            <div className='topSectionProfile centerSection'>
                                {/*===| PROFILE HEADER |==============*/}
                                <div className='profileHeader'>
                                    <div className='profileImgHolder'><img src={profileImg} alt='profile pic' /></div>
                                </div>
                                <div className='topProfileInfo'>
                                    {/*===| PROFILE MAIN INFO |=========*/}    
                                    <h3> {user.id ? user.first_name + ' ' + user.last_name : 'Name'} </h3>
                                    {/* <p>Username: {user.id ? user.first_name : null } </p> */}
                                    <p> {user.id ? user.email : 'Email'} </p>
                                    <p> {user.id ? user.high_school : 'High school'}</p>
                                    <p> {user.id ? user.current_year : 'Current Year'}</p>
                                    <p> {user.id ? user.location_city + ', ' + user.location_state : 'Location'}</p>
                                </div>


                            </div>
                            {/* end of top section profile */}

                            {/*===| ABOUT ME |====================*/}
                            <div className='centerSection'>
                                <div className='centerSectionHeader'><h3>About me</h3></div>
                            </div>

                             
                            {/*===| INTERESTS |====================*/}
                            
                            <div className='centerSection'><div className='centerSectionHeader'><h3>Interests</h3></div>
                            </div>

                            {/*===| SKILLS |====================*/}
                            <div className='centerSection'><div className='centerSectionHeader'><h3>Skills</h3></div>
                            </div>
                        </div>
                        {/* end of center sections holder */}


                        {/*===| right profile section |=================================*/}

                        <div className='favorites profileSideSection'>
                            <div className='sideSectionHeader'><h4>Favorites</h4></div>
                        </div>

                        {/*===| END of profile sections |=================================*/}

                    </div>

                </div>
                {/* end of all content profile */}
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { getUserInfo })(Profile);
