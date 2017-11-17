import React, { Component } from 'react';
import './CreateUser.css';
import { connect } from 'react-redux';
import profilePlaceholder from '../Nav/profilePlaceholder.png';
import { getUserInfo } from '../../ducks/reducer.js';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import TextField from 'material-ui/TextField';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // imageUrl: '',
            fullName: '',
            email: '',
            highschool: '',
            city: '',
            state: ''
        }
        this.handleDrop = this.handleDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
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
        this.props.getUserInfo();
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val,

        }, () => console.log('state', this.state))
    }
    saveInfo(id) {
        axios.put(`/api/saveuser/${id}`, this.state).then(res => {
            console.log('saveinfores', res)
        }) 
    }
    render() {



        // placeholder = { user.id ? user.first_name + ' ' + user.last_name : 'Full name' } value = { user.id ? user.first_name + ' ' + user.last_name : '' } 
        
        // placeholder = { user.id ? user.first_name + ' ' + user.last_name : 'example@gmail.com' } value = { user.id ? user.email : '' }

        //=====| Material-ui |==================================
        const TextFields= () => (
            <div>
                <TextField
                    hintText=''    
                    // hintText={user.id ? user.first_name + ' ' + user.last_name : this.state.fullName ? this.state.fullName : 'first and last'}
                    floatingLabelText="Name"
                    value={user.id ? user.first_name + ' ' + user.last_name : this.state.firstName}
                    onChange={(e) => this.handleChange('fullName', e.target.value)}
                /><br />

                <TextField
                    hintText="example@gmail.com"
                    floatingLabelText="Email"
                    value={user.id ? user.email : this.state.email}
                    onChange={(e) => this.handleChange('email', e.target.value)}
                /><br />
                <TextField
                    hintText="Enter here"
                    floatingLabelText="Highschool"
                    value={user.id ? user.highschool : this.state.highschool}
                    onChange={(e) => this.handleChange('highschool', e.target.value)}
                /><br />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="City"
                    value={user.id ? user.city : this.state.city}
                    onChange={(e) => this.handleChange('city', e.target.value)}
                /><br />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="State"
                    value={user.id ? user.state : this.state.state}
                    onChange={(e) => this.handleChange('state', e.target.value)}
                /><br />
            </div>

            
        );
         
        //=====| DropZone |==================================
        
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
                            {TextFields()}    
                            
                            


                        </div>

                    </div>
                    <Link to={'/assessment'}><div className='createUserNextBtn' onClick={()=> this.saveInfo(user.id)}><h3> Submit </h3></div></Link>



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