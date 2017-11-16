import React, { Component } from 'react';
import './SearchCollege.css';
import axios from 'axios'
import Nav from '../Nav/Nav.js';
require('dotenv').config()


class SearchCollege extends Component{ 
    constructor(){
        super();
 
        this.state = {
            colleges: []
        }
    }

    componentDidMount() {
        // axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools.json?fields=id,school.name,school.city,school.state,school.school_url&per_page=100&api_key=${process.env.REACT_APP_COLLEGE_API_KEY}`).then( res => { 
                
        
        // this.setState({
            //     colleges: res.data.results
            // })
            // console.log(this.state.colleges)
        // })
    }
 
    render(){

        return (
            <div className='SearchCollege'>
                <Nav/>
            </div>
        )
    }
}
export default SearchCollege;