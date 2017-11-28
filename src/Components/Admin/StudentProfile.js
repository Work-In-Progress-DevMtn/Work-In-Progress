import React, { Component } from 'react';
// import './StudentProfile.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class StudentProfile extends Component{ 
    constructor(){
        super();
 
        this.state = {
            student: {}
        }
    }
    
    componentDidMount() {
        const userId = this.props.match.params.id;

        axios.get(`/profile/${userId}`)
             .then( student => {
                student: student.data
             })
    }
 
    render() {
        
        return (
            <div className='StudentProfile'>
                <div className='contentHolder'>
                    
                </div>
            </div>
        )
    }
}
export default StudentProfile;