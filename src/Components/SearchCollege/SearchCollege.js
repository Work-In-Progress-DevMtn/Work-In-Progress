import React, { Component } from 'react';
import './SearchCollege.css';
import Nav from '../Nav/Nav.js';
class SearchCollege extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
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