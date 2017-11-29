const axios = require('axios');

module.exports =  {
    getAllStudents(url) {
        return  axios.get(url).then(res => {
            return res.data
        })
    },

    
}