import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='SearchJob'>
                <Nav/>
            </div>
        )
    }
}
export default SearchJob;