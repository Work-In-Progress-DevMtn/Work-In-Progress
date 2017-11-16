import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios'
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
    componentDidMount(){
        axios.get('/api/glassdoor').then(response => {
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