//ADMIN VIEW OF STUDENT PROFILE

import React, { Component } from 'react';
import './StudentProfile.css';
import axios from 'axios';
import profileImg from '../Assets/profilePlaceholder.png';



class StudentProfile extends Component {
    constructor() {
        super();

        this.state = {
            student: {},
            favorites: []
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        axios.get(`/detailedprofile/${userId}`)
            .then(student => {
                this.setState({
                    student: student.data[0]
                })
            })
        
        axios.get(`/getfavorites/${userId}`)
             .then( favorites => {
                console.log(favorites.data)
                this.setState({
                     favorites: favorites.data
                })
             })
             
    }

    render() {

        const { about, current_year, email, first_name, high_school, id, img_url, last_name, location_city, location_state } = this.state.student;

        const colleges = this.state.favorites.map( (college, i) => {
            return <div key={i}>
                <a href={college.website} className='admin_college_link'>{college.school_name}</a>
            </div>
        } )

        return (
            <div className='StudentProfile'>
                <div className='admin_profileContentHolder'>

                    <div className='admin_centerProfileHolder'>

                        <div className='admin_topSectionProfile admin_centerSection'>

                            <div className='admin_profileHeader'>
                                <div className='admin_profileImgHolder'><img src={img_url ? img_url : profileImg} alt='profile pic' /></div>
                            </div>

                            <div className='admin_topProfileInfo'>
                                <h3> {id ? first_name + ' ' + last_name : 'Name'} </h3>
                                <p> {id ? email : 'Email'} </p>
                                <p> {id ? high_school : 'High school'} - {id ? current_year : 'Current Year'}</p>
                                <p> {id ? location_city : 'City'},  {id ? location_state : 'State'}</p>
                            </div>


                        </div>

                        <div className='admin_centerSection'>

                            <div className='admin_centerSectionHeader admin_aboutHeader'><h3>About Me</h3></div>

                            <div className='admin_AboutInfoHolder'>
                                <p>{about}</p>
                            </div>

                        </div>


                        <div className='admin_centerSection'>

                            <div className='admin_centerSectionHeader'>
                                <h3>Favorites</h3>
                            </div>

                            <div>
                                <span className='admin_college_fav_header'>Colleges: </span>
                                {colleges}
                            </div>

                        </div>


                        <div className='admin_centerSection admin_skills'>

                            <div className='admin_centerSectionHeader'><h3>Skills</h3></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default StudentProfile;