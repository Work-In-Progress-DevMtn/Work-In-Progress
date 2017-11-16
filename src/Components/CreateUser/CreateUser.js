import React, { Component } from 'react';
import './CreateUser.css';
import profilePlaceholder from '../Nav/profilePlaceholder.png';
export default class CreateUser extends Component {
    render() {
        return (
            <div className='createuser'>
                <div className='createuserHolder'>
                    <h1>Welcome to W I P</h1>
                    
                    {/* left side of info -- profile pic */}
                    <div className='createuserInfoHolder'>
                        <div className='infoItem profileImgDiv'>
                            <img src={profilePlaceholder} alt='profileimg' />
                        </div>

                    {/* right side of info */}
                        <div className='userInfo infoItem'>
                            <h3>Name</h3>
                            <input type='text' placeholder='reduxUsername' value='' />
                            <h3>Email</h3>
                            <input type='text' placeholder='email' value='' />
                            <h3>Highschool</h3>
                            <input type='text' placeholder='Highschool' value='' />
                            <h3>City</h3>
                            <input type='text' placeholder='City' value='' />
                            <h3>State</h3>
                            <input type='text' placeholder='State' value='' />


                        </div>

                    </div>


                </div>

            </div>

        )
    }
}