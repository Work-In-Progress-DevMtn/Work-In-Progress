const axios = require('axios');
module.exports = {
    getSchoolsByRegion(college, region) {
        return college.filter(college => {
            return college.region == region
        })
    },

    getSchoolsByState(college, state) {
        return college.filter(college => {
            return college.state == state;

        })
    },
    getAllColleges(url) {
        return axios.get(url).then(res => {
            return res.data
        })
    },

    getSchoolByName(college, name) {
        return college.filter(college => {
            return college.name == name;
        })
    },

    getCollegeById(college, id) {
        return college.filter(college => {
            return college.id == id;
        })

    }


}