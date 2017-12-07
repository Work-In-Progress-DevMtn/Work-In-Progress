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

// import Checkbox from 'material-ui/Checkbox';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
// import Visibility from 'material-ui/svg-icons/action/visibility';
// import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';


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
            interests: [],
            aboutModal: false,
            favoriteColleges: [],
            checked: false,
            jobs: [],
            jobTitle: '',
            jobLink: '',
            scholarships: [],
            scholarshipLink: '',
            scholarshipTitle: '',
            skill: ''
        }
        this.toggleAbout = this.toggleAbout.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.toggleAboutFalse = this.toggleAboutFalse.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
        this.saveJob = this.saveJob.bind(this);
        this.saveScholarship = this.saveScholarship.bind(this);
        this.addSkill = this.addSkill.bind(this);
    }

    componentDidMount() {

        this.props.getUserInfo().then(() => {
            const user = this.props.user;
            axios.get(`/getfavecolleges/${user.id}`)
                 .then(res => {
                     this.setState({
                        favoriteColleges: res.data,
                        userId: user.id
                    })
            });
            axios.get(`/getfavejobs/${user.id}`)
                 .then( res => {
                     this.setState({
                         jobs: res.data
                     })
                 })
            
            axios.get(`/getfavescholarships/${user.id}`)
                 .then( res => {
                    this.setState({
                        scholarships: res.data
                    })
                 })

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
                    about: user.about

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
    // for checkbox
    updateCheck() {
        this.setState({
            checked: !this.state.checked

        });
    }


    removeFavorite(collegeId, userId) {
        const user = this.props.user;
        axios.delete(`/removeFaveCollege/${collegeId}/${userId}`)
            .then(
            axios.get(`/getfavecolleges/${user.id}`).then(res => {

                this.setState({
                    favoriteColleges: res.data
                }, () => console.log('favColleges', res.data))
            }));

    }

    saveJob() {
        axios.post(`/api/addjob`, this.state)
             .then( axios.get(`/getfavejobs/${this.state.userId}`).then( res => {
                 this.setState({
                     jobs: res.data
                 })
             }))
    }

    removeFavoriteJob(id) {
        console.log(this.state.userId)
        
        axios.delete(`/removefavejob/${id}`)
             .then( axios.get(`/getfavejobs/${this.state.userId}`).then( res => {
                this.setState({
                    jobs: res.data
                })
            }))
    }

    saveScholarship() {
        axios.post('/savescholarship', this.state)
             .then( axios.get(`/getfavescholarships/${this.state.userId}`).then( res => {
                 this.setState({
                     scholarships: res.data
                 })
             }))
    }

    removeFavoriteScholarship(id) {
        axios.delete(`/removescholarship/${id}`)
             .then( axios.get(`/getfavescholarships/${this.state.userId}`).then( res => {
                this.setState({
                    scholarships: res.data
                })
            }))
    }

    updateSkill(value) {
        this.setState({
            skill: value
        })
    }

    addSkill() {
        axios.post(`/addskill/${this.state.skill}`)
             .then( this.setState({
                skill: ''
            }) )

    }


    render() {

        const jobs = this.state.jobs.map( (job, i) => {
            return <div key={i} className='jobList'>

                <div>
                    <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.removeFavoriteJob(job.id)}></i>
                    <a href={`http://${job.job_link}`} target='_blank'>{job.job_title}</a>
                </div>

            </div>
        })

        const scholarships = this.state.scholarships.map ( (scholar, i) => {
            return <div key={i} className='scholarship_list'>
                
                <div>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.removeFavoriteScholarship(scholar.id)}></i>
                    <a href={`http://${scholar.scholarship_url}`} target='_blank'>{scholar.scholarship_title}</a>
                </div>

            </div>
        })

        const favCols = this.state.favoriteColleges;

        const favColleges = favCols.map((college, i) => {

            return (
                <div key={i} className='favItem'>
                    <div>
                        <li>
                            <i className="fa fa-trash-o" aria-hidden="true" onClick={() => this.removeFavorite(college.id, college.user_id)}></i><a href={`http://${college.website}`} target='_blank'>{college.school_name}</a>
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
        // textfield for adding for jobs
        const textStyle = {
            width: '90%',
            fontFamily: 'Open Sans Condensed, sans-serif'
        }
        const TextFieldJobName = () => (
            <div className='JobTextStyle'>
                <TextField
                    hintText="Job name"
                    floatingLabelText="Job Title"
                    value={this.state.jobTitle ? this.state.jobTitle : ''}
                    onChange={(e) => this.handleChange('jobTitle', e.target.value)}
                    style={textStyle}
                    rows={1}
                    rowsMax={9}
                    maxLength='30'
                /> <br />
            </div>
        )
        const TextFieldJobLink = () => (
            <div className='JobTextStyle'>
                <TextField
                    hintText="Job link"
                    floatingLabelText="Link"
                    value={this.state.jobLink ? this.state.jobLink : ''}
                    onChange={(e) => this.handleChange('jobLink', e.target.value)}
                    style={textStyle}
                    rows={1}
                    rowsMax={9}
                    maxLength='100'
                /> <br />
            </div>
        )

        const TextFieldScholarshipTitle = () => (
            <div className='JobTextStyle'>
                <TextField
                    hintText="Scholarship Title"
                    floatingLabelText="Scholarship Title"
                    value={this.state.scholarshipTitle? this.state.scholarshipTitle: ''}
                    onChange={(e) => this.handleChange('scholarshipTitle', e.target.value)}
                    style={textStyle}
                    rows={1}
                    rowsMax={9}
                    maxLength='100'
                /> <br />
            </div>
        )

        const TextFieldScholarshipLink = () => (
            <div className='JobTextStyle'>
                <TextField
                    hintText="Scholarship Link"
                    floatingLabelText="Scholarship Link"
                    value={this.state.scholarshipLink ? this.state.scholarshipLink : ''}
                    onChange={(e) => this.handleChange('scholarshipLink', e.target.value)}
                    style={textStyle}
                    rows={1}
                    rowsMax={9}
                    maxLength='100'
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
                                <div className='prof_jobs'>{jobs}</div>

                                {/* add to list section  */}
                                <div className='addToList'>

                                    {TextFieldJobName()}{TextFieldJobLink()}
                                    <div className='saveListItemBtn' onClick={this.saveJob}>Save</div>

                                </div>
                            </div>

                            <div className='profileSideSection'>
                                <div className='sideSectionHeader'><h4>Scholarships</h4></div>
                                    <div className='prof_jobs'>{scholarships}</div>
                                <div className='addToList'>

                                    {TextFieldScholarshipTitle()}{TextFieldScholarshipLink()}

                                    <div className='saveListItemBtn' onClick={this.saveScholarship}>Save</div>
                                </div>
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
                            <div className='centerSection'><div className='centerSectionHeader'>
                                <h3>Skills</h3></div>
                                <div className='skills_section'>
                                    <input onChange={ (e) => this.updateSkill(e.target.value) } className='skill_input'/>
                                    <button onClick={this.addSkill} className='skill_button'><i className="fa fa-plus" aria-hidden="true"> New Skill</i></button>
                                    {/* {skills} */}
                                </div>
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
