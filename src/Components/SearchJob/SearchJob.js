import React, { Component } from 'react';
import './SearchJob.css';
import Nav from '../Nav/Nav.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { getJobName, jobName} from '../../ducks/reducer';
require('dotenv').config();
class SearchJob extends Component{ 
    constructor(){
        super();
 
        this.state = {
            job: [],
            jobName: ''
        }

        this.getJobs = this.getJobs.bind(this);
    }
    getJobs(){
        axios.get('/getjobs', this.state).then(res => {
            console.log('result', res.data)
            this.setState({
                job: res.data
            }, () => console.log("state: ",this.state.job))
            
        })
    }
    handleInputChange(value) {
        this.setState({
            jobName: value
        }, () => {
            this.props.jobName(this.state.jobName)
           
        })
       
        console.log(this.state.jobName)
    }
   
    render(){
        const jobs = this.state.job.map((job, i) => {
            return <div key={i}>
            <a target = "_blank" className="text" href = {job.link}>{job.title}</a>
            
            </div>
        })
        return (
            <div className='SearchJob'>
                <Nav/>
                
                <div className="allInfo">
                <input onChange={(e) => this.handleInputChange(e.target.value)} />
                <button className = 'searchButton' onClick={ this.getJobs } >Search</button>
                
                </div>
                <div>{jobs}</div>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('state in mSTP', state);
    return {
        jobName: state.orders
    }
}
export default connect(mapStateToProps, {getJobName, jobName})(SearchJob) ;