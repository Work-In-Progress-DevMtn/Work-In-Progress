import React, { Component } from 'react';
import './SearchScholarship.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer';
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
                <div className='contentHolder schollHolder'>
                    <div className='schollTitle'>
                    <p>search scholarships</p>
                    </div>
                <div className='instructScholl'>
                    <p>Search</p>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <p>Find</p>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <p>Apply</p>
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <p>Repeat</p>
                </div>
                <div className="schollLinksHolder">
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                    <div className="individualLink">
                    <a href="https://www.scholarships.com/"><i className="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SearchScholarship;