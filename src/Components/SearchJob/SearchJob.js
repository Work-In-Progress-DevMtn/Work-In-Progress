import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios'
require('dotenv').config();
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
    componentDidMount(){
        axios.get(`http://api.glassdoor.com/api/api.htm?t.p=${ process.env.REACT_APP_GLASSDOOR_PARTNER_ID }&t.k=${ process.env.REACT_APP_GLASSDOOR_KEY }&userip=localhost:3000&useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=11`).then(response => {
            console.log(response.data)
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