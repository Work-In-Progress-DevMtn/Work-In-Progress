const axios = require('axios');

module.exports =  {
    getAllStudents(url) {
        return  axios.get(url).then(res => {
            return res.data
        })
    },

    getStudentsByState(users, state) {
        return users.filter( user => {
            return user.state == state
        })
    },

    getStudentByName(users, name) {
        return users.filter( user => {
            return user.name == name
        })
    },

    getStudentByNameAndState(users, name, state) {
        return users.filter (user => {
            return (user.name == name && user.state == state)
        })
    },

    filterAdmin(users, bool) {
        return users.filter ( user => {
            return user.is_admin === bool;
        })
    }
}