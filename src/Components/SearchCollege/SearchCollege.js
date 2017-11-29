import React, { Component } from 'react';
import './SearchCollege.css';
import axios from 'axios'
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
require('dotenv').config()


class SearchCollege extends Component {
    constructor() {
        super();

        this.state = {
            colleges: [],
            schoolName: '',
            schoolState: '',
            id: null,
            userId: null,
            currentPage: 1,
            resultsPerPage: 24
        }

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.searchByNameAndState = this.searchByNameAndState.bind(this);
        this.searchByState = this.searchByState.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        axios.get('/getcolleges')
            .then(res => {
                this.setState({
                    colleges: res.data
                })
            })

        axios.get('/auth/me')
            .then(res => {
                //  console.log(res.data)
                this.setState({
                    userId: res.data.id
                })
            })
    }

    handleInputChange(value) {
        this.setState({
            schoolName: value
        })
    }

    handleStateChange(value) {
        this.setState({
            schoolState: value
        })
    }

    handleSearch() {
        if (this.state.schoolName && this.state.schoolState) {
            return this.searchByNameAndState();
        }
        else if (this.state.schoolName && !this.state.schoolState) {
            return this.searchByName();
        }
        else if (this.state.schoolState && !this.state.schoolName) {
            return this.searchByState();
        }
    }

    searchByNameAndState() {
        axios.get(`/getcollegesbystateandname/${this.state.schoolState}/${this.state.schoolName}`)
            .then(res => {
                this.setState({
                    colleges: res.data
                })
            })
    }

    searchByName() {
        axios.get(`/getcollegesbyname/${this.state.schoolName}`)
            .then(res => {
                //  console.log(res.data)
                this.setState({
                    colleges: res.data
                })
            })
    }

    searchByState() {
        axios.get(`/getcollegesbystate/${this.state.schoolState}`)
            .then(res => {
                // console.log(res.data)
                this.setState({
                    colleges: res.data
                })
            })
    }

    expandCollege(id) {
        axios.get(`/getcollegeinfo/${id}`)
            .then(res => {
                //  console.log(res.data[0]);
                this.setState({
                    id: res.data[0].id
                })
            })
    }

    addCollegeToFavorites(id) {
        axios.post(`/addcollegetofavorites/${id}/${this.state.userId}`)
            .then(res => {
                console.log(res);
            })
    }

    handlePageClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }



    render() {

        const { currentPage, colleges, resultsPerPage } = this.state

        const indexOfLastResult = currentPage * resultsPerPage;
        const indexOfFirstResult = indexOfLastResult - resultsPerPage;
        const currentResults = colleges.slice(indexOfFirstResult, indexOfLastResult);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(colleges.length / resultsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map((number, i) => {
            return (
                <span key={number} id={number} className='page_numbers' onClick={this.handlePageClick}>
                    {number}
                </span>
            )
        })

        const collegeList = currentResults.map((college, i) => {
            return <div key={i} className='colleges'>
                <span className='school_name' onClick={() => this.expandCollege(college.id)}>{college['school_name']}</span>

                { this.state.id === college.id ? <div className='dropdown'>
                    <div className='college_dropdown'>
                        <div className='college_location'>{college['school_city']}, {college['school_state']}</div>
                        <div className='college_website'><a href={college.website} target='_blank'>{college.website}</a></div>
                    </div>
                    <div onClick={() => this.addCollegeToFavorites(college.id)} className='fave_button'><FavoriteButton /></div>
                </div>

                    : <div> </div>}

            </div>
        })

        return (
            <div className='SearchCollege'>

                <Nav />
                <div className='search_header'>
                    <span className='search_title'>Search Colleges</span>
                    <div className='search_inputs'>
                        <div className='input_box'>
                            <span className='college_input_header'>School Name:</span>
                            <input className='college_input' onChange={(e) => this.handleInputChange(e.target.value)} />
                        </div>

                        <div className='input_box'>
                            <span className='college_input_header'>State: </span>
                            <select name="State" className='state_dropdown' onChange={(e) => this.handleStateChange(e.target.value)}>
                                <option value=''>   </option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>

                            <button onClick={this.handleSearch} className='search_button'>Search</button>
                        </div>
                    </div>

                </div>

                <div className='displayed_colleges'>
                    <div className='college_list'>
                        {collegeList}
                        <div className='divider'></div>
                    </div>
                </div>

                <div className='page_container'>
                    <div className='num_container'>
                        {renderPageNumbers}
                    </div>
                </div>

            </div>
        )
    }
}
export default SearchCollege;