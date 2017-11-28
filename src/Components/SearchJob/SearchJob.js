import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios'
require('dotenv').config();
const Xray = require('x-ray');
    const request = require('request');
    const fs = require('fs');
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            job: []
        }
    }
    
    
    render(){
    const xray = new Xray();
    xray('https://www.glassdoor.com/Job/jobs.htm?sc.keyword=all&locT=&locId=0&locKeyword=&srs=RECENT_SEARCHES', '.flexbox', [{
        title:'a',
        link: 'a@href'
        
    }]).paginate('.next a@href')
      .limit(50)
    .write('results.json');
   
    
        return (
            <div className='SearchJob'>
                <Nav/>
                <div></div>
            </div>
        )
    }
}
export default SearchJob;