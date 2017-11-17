import React,  {Component} from 'react';
import './Loading.css';
import axios from 'axios'
// import { settings } from 'cluster';

class Loading extends Component{ 
    constructor(){
        super();
        
 
        this.state = {
            
        }
        this.myWaitTime = this.myWaitTime.bind(this);
    }

    

    componentWillMount() {
        setTimeout(this.myWaitTime, 2000);
    }


    myWaitTime() {
        axios.get('/auth/me').then(res => {
            console.log(res.data);


            if (res.data.is_admin) {
               
                    window.location.assign('http://localhost:3000/admin')


            } else {
                if (res.data.new_user) {
                    
                        window.location.assign('http://localhost:3000/createuser')
                   

                }
                else {
                    
                        window.location.assign('http://localhost:3000/profile')
                    

                }
            }
        })

    }
    render(){
        return (
            <div className='Loading'>
                <div class="loader"></div>
            </div>
        )
    }
}
export default Loading;