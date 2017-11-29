Xray = require('x-ray');
request = require('request');
fs = require('fs');

module.exports = {
getJob(req, res, next){
    input = 'web-developer'
    xray = new Xray();
    xray(`https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=&sc.keyword=${input}&locT=&locId=&jobType=`, '.flexbox', [{
        title:'a',
        link: 'a@href',
        price: 'i .data-displayed-min-salary'
        
    }]).paginate('.next a@href')
      .limit(1)
    .write('results.json');
}
}