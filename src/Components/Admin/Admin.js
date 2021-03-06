import React, { Component } from 'react';
import './Admin.css';
import axios from 'axios';
import RemoveIcon from './RemoveIcon';
import { Link } from 'react-router-dom';


class Admin extends Component {
    constructor() {
        super();

        this.state = {
            students: [],
            highSchool: '',
            studentName: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.searchBySchoolAndName = this.searchBySchoolAndName.bind(this);
        this.searchBySchool = this.searchBySchool.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.updateHighSchool = this.updateHighSchool.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    componentDidMount() {
        axios.get('/getallstudents').then(res => {
            this.setState({
                students: res.data
            })
        })
    }

    updateHighSchool(value) {
        this.setState({
            highSchool: value
        })
    }

    updateName(value) {
        this.setState({
            studentName: value
        })
    }

    handleSearch() {
        if (this.state.highSchool && this.state.studentName) {
            return this.searchBySchoolAndName(this.state.highSchool, this.state.studentName);
        }
        else if (this.state.highSchool && !this.state.studentName) {
            return this.searchBySchool(this.state.highSchool);
        }
        else if (this.state.studentName && !this.state.highSchool) {
            return this.searchByName(this.state.studentName);
        }
        else {
            alert('No Results')
        }
    };

    searchBySchoolAndName(school, name) {
        axios.get(`/getstudentbyschoolandname/${school}/${name}`)
            .then(res => {
                this.setState({
                    students: res.data
                })
            })
    };

    searchBySchool(school) {
        axios.get(`/getstudentbyschool/${school}`)
            .then(res => {
                this.setState({
                    students: res.data
                })
            })
    };

    searchByName(name) {
        axios.get(`/getstudentbyname/${name}`)
            .then(res => {
                this.setState({
                    students: res.data
                })
            })
    };

    removeStudent(id) {
        axios.delete(`/removestudent/${id}`)
            .then(axios.get('/getallstudents').then(res => {
                this.setState({
                    students: res.data
                })
            })
            )
    }



    render() {

        const studentList = this.state.students.map((student, i) => {
            return <div key={i} className='student_list'>


                <div className='student'>

                    <div className='image_container'>
                        <div onClick={() => this.removeStudent(student.id)} className='remove_button'><RemoveIcon /></div>
                        <img src={student.img_url} alt='' className='student_image' />
                    </div>
                    
                    <Link to={`/profile/${student.id}`} target='_blank' className='link'>
                        <span className='student_name'>{student.first_name} {student.last_name}</span> 
                    </Link>
                        <span className='student_hs'>{student.current_year}, {student.high_school}</span>
                    
                </div>



            </div>
        })

        return (
            <div className='admin'>
                <div className='search_wrap'>
                    <div className='top_search'>
                        <span className='admin_header'>Students</span>

                        <div className='search_container'>
                            <span className='input_header'>High School: </span><input className='search' onChange={e => this.updateHighSchool(e.target.value)} />
                        </div>

                        <div className='search_container'>
                            <span className='input_header'>Student Last Name: </span><input className='search' onChange={e => this.updateName(e.target.value)} />
                        </div>

                        <button className='admin_search' onClick={this.handleSearch}> Search </button>
                    </div>
                </div>

                <div className='students_list'>
                    {studentList}
                </div>

            </div>
        )
    }
}
export default Admin;