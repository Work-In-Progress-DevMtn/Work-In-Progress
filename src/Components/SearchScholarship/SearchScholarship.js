import React, { Component } from 'react';
import './SearchScholarship.css';
import Nav from '../Nav/Nav.js';
class SearchScholarship extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='SearchScholarship'>
                <Nav/>
            </div>
        )
    }
}
export default SearchScholarship;