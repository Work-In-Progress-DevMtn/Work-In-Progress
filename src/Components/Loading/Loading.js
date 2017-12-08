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
        setTimeout(this.myWaitTime, 1800);
    }


    myWaitTime() {
        axios.get('/auth/me').then(res => {
            console.log(res.data);


            if (res.data.is_admin) {
               
                    window.location.assign('/admin')


            } else {
                if (res.data.new_user) {
                    
                        window.location.assign('/createuser')
                   

                }
                else {
                    
                        window.location.assign('/profile')
                    

                }
            }
        })

    }
    render(){
        return (
            <div className='Loading'>
                <div class="loader">                                                                                                                                       </div>
            </div>
        )
    }
}
export default Loading;