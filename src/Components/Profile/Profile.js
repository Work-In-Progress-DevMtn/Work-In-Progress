import React, { Component } from 'react';
import { getUserInfo } from './../../ducks/reducer';
import { connect } from 'react-redux';
import './Profile.css';
import Nav from '../Nav/Nav.js';


class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {



        }
    }

    componentDidMount() {
        this.props.getUserInfo();

    }
    render() {
        const user = this.props.user;
        return (
            <div className='Profile'>
                <Nav />
                <div className='profileContent'>
                    <p>Username: {user.id ? user.first_name + ' ' + user.last_name : null} </p>
                    {/* <p>Username: {user.id ? user.first_name : null } </p> */}
                    <p>Email: {user.id ? user.email : null} </p>
                    <p>High School:</p>
                    <p>Current Year:</p>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { getUserInfo })(Profile);
