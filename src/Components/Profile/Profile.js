import React, { Component } from 'react';
import { getUserInfo } from './../../ducks/reducer';
import { connect } from 'react-redux';
import './Profile.css';
import Nav from '../Nav/Nav.js';


class Profile extends Component{ 
    constructor(props){
        super(props);
 
        this.state = {
            

            
        }
    }

    componentDidMount() {
        this.props.getUserInfo();

    }

    // componentWillReceiveProps(newProps){
        // this.setState({
        //     firstName: newProps.user.first_name,
        //     lastName: newProps.user.last_name,
        //     highSchool: newProps.user.high_school

        // })
        // console.log(newProps)
    // }
 
    render(){
        const user = this.props.user;
        // console.log(this.newProps.user.id)
        return (
            <div className='Profile'>
                <Nav/>
                <p>Username: {user.id ? user.first_name : null } </p>
                {/* <p>Username: {user.id ? user.first_name : null } </p> */}
            <p>Email: {user.id ? user.email : null } </p>

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
// connect(null, {findCurrentUser})(Profile);