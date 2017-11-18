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
        console.log(user)
        return (
            <div className='Profile'>
                <Nav />
                <div className='profileContent'>
                    <p>Username: {user.id ? user.first_name + ' ' + user.last_name : null} </p>
                    {/* <p>Username: {user.id ? user.first_name : null } </p> */}
                    <p>Email: {user.id ? user.email : null} </p>
                    <p>High school: {user.id ? user.high_school : null}</p>
                    <p>Current Year: {user.id ? user.current_year : null}</p>
                    <p>Location: {user.id ? user.location_city + ', ' + user.location_state : null}</p>
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
