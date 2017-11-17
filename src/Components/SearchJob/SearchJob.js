import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios'
require('dotenv').config();
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            job: []
        }
    }
    componentDidMount(){
        axios.get(`http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=${ process.env.REACT_APP_GLASSDOOR_PARTNER_ID }&t.k=${ process.env.REACT_APP_GLASSDOOR_KEY }&action=jobs-stats&“&countryId=1&jobTitle=all&userip=localhost:3000&useragent=Mozilla/%2F4.0`).then(response => {
            console.log(response.data)
           
        })
    }
   
    render(){
        return (
            <div className='SearchJob'>
                <Nav/>
                <div></div>
            </div>
        )
    }
}
export default SearchJob;