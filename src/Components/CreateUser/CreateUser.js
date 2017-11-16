import React, { Component } from 'react';
import './CreateUser.css';
import { connect } from 'react-redux';
import profilePlaceholder from '../Nav/profilePlaceholder.png';
import { getUserInfo } from '../../ducks/reducer.js';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: ''
        }
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleDrop = files => {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "kgjwyzim"); // Replace the preset name with your own
            formData.append("api_key", process.env.REACT_APP_CLOUDINARY_KEY); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);
            
            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post("https://api.cloudinary.com/v1_1/dfkw5isvi/image/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app
                // console.log(data);
                axios.get(data.secure_url).then(res => {
                    console.log(res);
                    this.setState({
                        imageUrl: res.config.url
                    })
                })
            })


        })
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation

        });
    }

    componentDidMount() {

    }
    render() {

        // DROPZONE-------------------------------------------------------


        const user = this.props.user;
        return (
            <div className='createuser'>
                <div className='createuserHolder'>
                    <h1>Welcome to W I P</h1>

                    {/* left side of info -- profile pic */}




                    <div className='createuserInfoHolder'>
                        <div className='infoItem profileImgDiv'>
                            {/*===| CLOUDINARY |=================================*/}


                            {/* DROPZONE */}
                            <Dropzone
                                onDrop={this.handleDrop}
                                multiple
                                accept="image/*"
                                style={'border:none'}
                            ><img src={this.state.imageUrl ? this.state.imageUrl : profilePlaceholder} alt='profileimg' />

                            </Dropzone>
                            <span>Change image</span>

                        </div>


                        {/*===| RIGHT SIDE OF INFO |=================================*/}
                        <div className='userInfo infoItem'>
                            <h3>Name</h3>
                            {user.id ? user.first_name + ' ' + user.last_name : 'first and last'}
                            <input type='text' placeholder='' value='' />
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
                    <Link to={'/assessment'}><div className='createUserNextBtn'><h3> Submit </h3></div></Link>



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

export default connect(mapStateToProps, { getUserInfo })(CreateUser);