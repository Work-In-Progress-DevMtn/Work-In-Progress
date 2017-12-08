const axios = require('axios');

module.exports = {
    
    getStudentsByState(users, state) {
        return users.filter(user => {
            return user.state == state
        })
    },

    getStudentByName(users, name) {
        return users.filter(user => {
            return user.name == name;

        })
    },

    getStudentById(users, id) {
        return users.filter(user => {
            return user.id == id;
        })
    },

    getStudentsByYear(users, year) {
        return users.filter(user => {
            return user.current_year == year;
        })

    },
    getAllStudents(url) {
        return axios.get(url).then(res => {
            return res.data
        })
    },
}