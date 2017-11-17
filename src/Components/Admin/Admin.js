import React, { Component } from 'react';
import './Admin.css';
import Nav from '../Nav/Nav.js';
class Admin extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {

        return (
            <div className='Admin'>
                <Nav />
                <div className='contentHolder'>
                    hello
                </div>

            </div>
        )
    }
}
export default Admin;