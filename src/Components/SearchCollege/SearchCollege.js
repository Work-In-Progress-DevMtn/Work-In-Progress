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