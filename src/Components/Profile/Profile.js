import React, { Component } from 'react';
import { getUserInfo } from './../../ducks/reducer';
import { connect } from 'react-redux';
import './Profile.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import profileImg from '../Assets/profilePlaceholder.png';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import axios from 'axios';
class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgUrl: '',
            firstName: '',
            lastName: '',
            myEmail: '',
            highschool: '',
            currentYear: '',
            city: '',
            USstate: '',
            about: '',
            // interests: [],
            aboutModal: false,
            favoriteColleges: []

        }
        this.toggleAbout = this.toggleAbout.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.toggleAboutFalse = this.toggleAboutFalse.bind(this);
        // this.removeFavorite = this.removeFavorite.bind(this); for removing a favorite from favorites
    }

    componentDidMount() {


        this.props.getUserInfo().then(() => {
            const user = this.props.user;
            axios.get(`/getfavecolleges/${user.id}`).then(res => {

                this.setState({
                    favoriteColleges: res.data
                }, () => console.log('favColleges', res.data))
            });
            if (user.id) {
                this.setState({
                    imgUrl: user.img_url,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    myEmail: user.email,
                    highschool: user.high_school,
                    currentYear: user.current_year,
                    city: user.location_city,
                    USstate: user.location_state,
                    about: user.about,

                })

            }
        });


    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val,

        })
    }
    toggleAboutFalse() {
        this.setState({
            aboutModal: false
        })
    }

    toggleAbout() {
        this.setState({
            aboutModal: !this.state.aboutModal
        })
    }

    saveInfo(id) {
        console.log('id', id);
        console.log(this.state.about);
        axios.put(`/api/saveuser/${id}`, this.state).then(res => {
            // console.log('saveinfoRes', res)
        })
        this.toggleAbout();
    }


    // removeFavorite() {
    //     axios.put('/removeFaveCollege')
    // }
    render() {
        console.log('favoriteColleges', this.state.favoriteColleges)
        const favCols = this.state.favoriteColleges;

        const favColleges = favCols.map((college, i) => {
            console.log(college);
            return (
                <div key={i} className='favItem'>
                    <div>
                        <li>
                            <a href={`http://${college.website}`} target='_blank'>{college.school_name}</a><i class="fa fa-trash-o" aria-hidden="true"></i>
                            {/* <p onClick={this.removeFavorite}>Remove</p> */}
                        </li>    
                    </div>
                </div>
            )
        })





        const user = this.props.user;
        // about me input box
        const textStyles = {
            width: '95%',
            fontFamily: 'Open Sans Condensed, sans-serif'
        }
        const TextFieldMui = () => (
            <div>
                <TextField
                    hintText=""
                    floatingLabelText="About Me"
                    value={this.state.about ? this.state.about : ''}
                    onChange={(e) => this.handleChange('about', e.target.value)}
                    style={textStyles}
                    multiLine={true}
                    rows={1}
                    rowsMax={9}
                    maxLength='280'
                /> <br />
            </div>
        )


        return (
            <div className='Profile'>
                {/* ----------FONT-----------*/}
                <style>@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans+Condensed:300');</style>

                <Nav />
                <div className='profileContentHolder'>
                    <div className='profileContent'>

                        {/*===| Left profile section |=================================*/}
                        <div className='profileSideHolder leftSide'>
                            <div className='profileSideSection'>
                                <div className='sideSectionHeader'><h4>Careers</h4></div>
                            </div>
                            <div className='profileSideSection'>
                                <div className='sideSectionHeader'><h4>Scholarships</h4></div>
                            </div>
                        </div>
                        {/*===| Center Profile Section |=================================*/}
                        <div className='centerProfileHolder'>
                            <div className='topSectionProfile centerSection'>
                                {/*===| PROFILE HEADER |==============*/}
                                <div className='profileHeader'>
                                    <Link to='/createuser'><div className='profileImgHolder'><img src={user.img_url ? user.img_url : profileImg} alt='profile pic' /></div></Link>
                                </div>
                                <div className='topProfileInfo'>
                                    {/*===| PROFILE MAIN INFO |=========*/}
                                    <h3> {user.id ? user.first_name + ' ' + user.last_name : 'Name'} </h3>
                                    {/* <p>Username: {user.id ? user.first_name : null } </p> */}
                                    <p> {user.id ? user.email : 'Email'} </p>
                                    <p> {user.id ? user.high_school : 'High school'} - {user.id ? user.current_year : 'Current Year'}</p>
                                    <p> {user.id ? user.location_city : 'City'},  {user.id ? user.location_state : 'State'}</p>
                                    
                                </div>


                            </div>
                            {/* end of top section profile */}

                            {/*===| ABOUT ME |====================*/}
                            <div className={this.state.aboutModal ? 'centerSection darkened' : 'centerSection'}>
                                {/* about info header and edit/save/cancel buttons     */}
                                <div className='centerSectionHeader aboutHeader'><h3>About me</h3>
                                    {this.state.aboutModal ? <div className='aboutBtnHolder'><div className='aboutBtn closeAboutBtn' onClick={this.toggleAboutFalse}>Cancel</div><div className='aboutBtn' onClick={() => this.saveInfo(user.id)}>Save</div></div> : <div className='aboutBtnHolder'><div className='aboutBtn' onClick={this.toggleAbout}>Edit</div></div>}</div>

                                {/* about info for user */}
                                <div className='AboutInfoHolder'>
                                    <p>{this.state.about}</p>
                                </div>

                                {/* about info edit modal */}
                                <div className={this.state.aboutModal ? 'editAboutHolder displayAbout ' : 'editAboutHolder hideAbout'}>
                                    {TextFieldMui()}
                                </div>
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
                        <div className='profileSideHolder rightSide'>
                            <div className='profileSideSection rightSideSection'>
                                <div className='sideSectionHeader'><h4>Favorites</h4></div>
                                {/* favorite colleges */}
                                <div className='favoriteCollegesHolder'>
                                    <div className='favoriteSection'>
                                        <h3>Colleges</h3>
                                        {favColleges}
                                    </div>
                                    {/* favorite jobs */}
                                    <div className='favoriteSection'>
                                        <h3>Jobs</h3>
                                        {favColleges}
                                    </div>
                                    {/* favorite scholarships */}
                                    <div className='favoriteSection'>
                                        <h3>Scholarships</h3>
                                        {favColleges}
                                    </div>

                                </div>
                            </div>
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
