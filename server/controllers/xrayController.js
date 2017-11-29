const Xray = require('x-ray');
const request = require('request');
const fs = require('fs');

module.exports = {
    getJobs(req, res, next) {
        // console.log('got to controller file')
        input = 'web-developer'
        xray = new Xray();
        xray(`https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=&sc.keyword=${input}&locT=&locId=&jobType=`, '.flexbox', [{
            title:'a',
            link: 'a@href',
            price: 'i .data-displayed-min-salary'
            
        }])
            .paginate('.next a@href')
           .limit(1)
        //    .then(function(resp) {
        //        console.log('resp', resp)
        //    })
        //    .catch(function(err) {
        //        console.log('err', err)
        //    })
            // .stream
           .write('results.json');
    }
}