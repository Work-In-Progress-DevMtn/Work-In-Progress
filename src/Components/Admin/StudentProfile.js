import React, { Component } from 'react';
// import './StudentProfile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class StudentProfile extends Component {
    constructor() {
        super();

        this.state = {
            student: {}
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.id;

        axios.get(`/detailedprofile/${userId}`)
            .then(student => {
                this.setState({
                    student: student.data[0]
                }, () => console.log('student: ', this.state.student))
            })

    }

    render() {

        const { about, current_year, email, first_name, high_school, id, img_url, interests, is_admin, last_name, location_city, location_state } = this.state.student;

        return (
            <div className='StudentProfile'>
                <div className='contentHolder'>

                    <div className='centerProfileHolder'>

                        <div className='topSectionProfile centerSection'>
                            
                            <div className='topProfileInfo'>
                                <h3> {id ? first_name + ' ' + last_name : 'Name'} </h3>
                                <p> {id ? email : 'Email'} </p>
                                <p> {id ? high_school : 'High school'} - {id ? current_year : 'Current Year'}</p>
                                <p> {id ? location_city : 'City'},  {id ? location_state : 'State'}</p>
                            </div>


                        </div>

                        <div className='centerSection'>

                            <div className='centerSectionHeader aboutHeader'><h3>About Me</h3></div>

                            <div className='AboutInfoHolder'>
                                <p>{about}</p>
                            </div>

                        </div>


                        <div className='centerSection'>

                            <div className='centerSectionHeader'><h3>Interests</h3></div>
                        
                        </div>
                        

                        <div className='centerSection'>

                            <div className='centerSectionHeader'><h3>Skills</h3></div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default StudentProfile;