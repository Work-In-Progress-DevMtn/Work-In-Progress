import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios';
require('dotenv').config();
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            job: []
        }
    }
    getJobs(){
        axios.get('/getjobs').then(res => {
            console.log('response', res.data)
        })
    }
   
    render(){
        return (
            <div className='SearchJob'>
                <Nav/>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div onClick={ this.getJobs }>BUTTON</div>
            </div>
        )
    }
}
export default SearchJob;