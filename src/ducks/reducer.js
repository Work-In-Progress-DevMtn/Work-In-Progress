import axios from 'axios';

const initialState = {
    user: {},
    jobName: ''
}

//store it here as a const in case it is misspelled
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const GET_JOB_NAME = 'GET_JOB_NAME';
const JOB_NAME = 'JOB_NAME';


//action creator that returns an object that is the action
export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: 'GET_USER_INFO',
        payload: userData
    }


}
//update user info
export function updateUserInfo() {
    return {
        type: 'UPDATE_USER_INFO',
        payload: ''
    }


}
export function getJobName() {
    return {
        type: 'GET_JOB_NAME',
        payload: ''
    }
}
export function jobName(param) {
    console.log('param', param);
    return{
        type: 'JOB_NAME',
        payload: param
    }
}

//create this first for redux. State comes first, set state to initial state found above.
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case UPDATE_USER_INFO: //+ '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case GET_JOB_NAME: 
            return Object.assign( {}, state, {jobName: action.payload});
        case JOB_NAME: 
            return Object.assign( {}, state, {jobName: action.payload});
        default:
            return state;
    }

}




// import axios from 'axios';


// //initial state

// const initialState = {
//     user: {}
// }


// //Action constants
// const FIND_CURRENT_USER = 'FIND_CURRENT_USER';


// //Action Creators

// export function findCurrentUser() {
//     const userData = axios.get('/auth/me')
//         .then(res => {
//             // console.log("RES", res);
//             return res.data;
//         })
//         .catch(err => {
//             // console.log("ERR", err);
//         })
//     return {
//         type: 'FIND_CURRENT_USER',
//         payload: userData
//     }
// }



// //reducer function
// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case `${FIND_CURRENT_USER}_FULFILLED`:
//             return Object.assign({}, state, { user: action.payload })
       
//         default: 
//         return state;
//     }
// }









 // case `${FIND_CURRENT_USER}_REJECTED`:
        //     console.log('rejected')
        //     return state
        // case `${FIND_CURRENT_USER}_PENDING`:
        //     console.log('pending')
            // return state



