import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios'
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            jobs: []
        }
    }
    componentWillMount(){
        console.log('hit')
        axios.get(`http://api.glassdoor.com/api/api.htm?t.p=${process.env.REACT_APP_GLASSDOOR_PARTNER_ID}&t.k=${process.env.REACT_APP_GLASSDOOR_KEY}&userip=http://localhost:3000/searchjob&useragent=&format=json&v=1&action=jobs-prog&countryId=1&jobTitle=cashier`).then(response => {
            console.log(response.data);
        })
    }
   
   
    render(){
        return (
            <div className='SearchJob'>
                <Nav/>
                <div>
                </div>
            </div>
        )
    }
}
export default SearchJob;