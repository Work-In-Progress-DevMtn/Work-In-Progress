import React, { Component } from 'react';
import './SearchScholarship.css';
import Nav from '../Nav/Nav.js';
class SearchScholarship extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='searchScholarship'>
                <Nav />
                <div className='contentHolder schollTitle'>
                    <p>search scholarships</p>
                </div>
                <div className='mainSchollHeader'>
                    <h3>Below we have listed various websites in which you can find scholarships relevent to you</h3>
                </div>
                <div className="schollLinksHolder">
                    <a href="https://www.scholarships.com/"><i class="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <a><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <a><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <a><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <a><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <a><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <a><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <a><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>

                </div>
            </div>
        )
    }
}
export default SearchScholarship;