
const axios = require('axios');


module.exports = {
    getJobs: (req,res,next) => {
        return axios.get(`http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=${ process.env.REACT_APP_GLASSDOOR_PARTNER_ID }&t.k=${ process.env.REACT_APP_GLASSDOOR_KEY }&action=jobs-stats&“&countryId=1&jobTitle=all&userip=localhost:3000&useragent=Mozilla/%2F4.0`).then(response => {
    console.log(response.data);
    res.status(200).send(response.data);
    })

   
    }
    }