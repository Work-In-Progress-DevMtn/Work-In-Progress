import React, { Component } from 'react';
import './SearchCollege.css';
import axios from 'axios'
import Nav from '../Nav/Nav.js';
require('dotenv').config()


class SearchCollege extends Component{ 
    constructor(){
        super();
 
        this.state = {
            colleges: [],
            schoolName: '',
            schoolState: ''
        }

    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchByName = this.searchByName.bind(this);
    this.searchByNameAndState = this.searchByNameAndState.bind(this);
    this.searchByState = this.searchByState.bind(this);
    }

    componentDidMount() {
        // axios.get('/getcolleges')
        //      .then( res => {
        //         //  console.log(res.data);
        //          this.setState({
        //              colleges: res.data
        //          })
        //          console.log(this.state.colleges)
        //      })
        
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
        if(this.state.schoolName && this.state.schoolState) {
            return this.searchByNameAndState();
        } 
        else if(this.state.schoolName && !this.state.schoolState) {
            return this.searchByName();
        } 
        else if(this.state.schoolState && !this.state.schoolName) {
            return this.searchByState();
        }
        // else {
        //     alert('Oops!')
        // }
    }

    searchByNameAndState() {
        axios.get(`/getcollegesbystateandname/${this.state.schoolState}/${this.state.schoolName}`)
             .then( res => {
                 console.log(res.data);
                 //this.setState({
                //    colleges: res.data
                //  })
             })
    }

    searchByName() {
        axios.get(`/getcollegesbyname/${this.state.schoolName}`)
             .then( res => {
                 console.log(res.data)
                //  this.setState({
                //      colleges: res.data
                //  })
             })
    }

    searchByState() {
        axios.get(`/getcollegesbystate/${this.state.schoolState}`)
             .then( res => {
                console.log(res.data)
                //  this.setState({
                //      colleges: res.data
                //  })
             })
    }
 
    render(){

        const colleges = this.state.colleges;
        const collegeList = colleges.map( (college, i) => {
            return <div key={i} className='colleges'>
                <span>{college['school_name']}</span>
            </div>
        })

        return (
            <div className='SearchCollege'>
                <Nav/>
                <div className='search_header'>
                    <span className='search_title'>Search Colleges</span>
                    <div className='search_inputs'>
                        <div>
                            <span className='college_input_header'>School Name:</span>
                            <input className='college_input'  onChange={ (e) => this.handleInputChange(e.target.value) }/>
                        </div>

                        <div>
                            <span className='college_input_header'>State: </span>
                            <select name = "State" className='state_dropdown' onChange={ (e) => this.handleStateChange(e.target.value) }>
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

                            <button onClick={ this.handleSearch() } className='search_button'>Search</button>
                        </div>
                    </div>
                    
                </div>

                <div className='displayed_colleges'>
                    {collegeList}
                </div>
            </div>
        )
    }
}
export default SearchCollege;