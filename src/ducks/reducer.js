import axios from 'axios';

const initialState = {
    user: {}
}

//store it here in case it is misspelled
const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';


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

//create this first for redux. State comes first, set state to initial state found above.
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        case UPDATE_USER_INFO: //+ '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

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



