require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      cors = require('cors'),
      axios = require('axios');

const gdc = require('./controllers/glassdoorController.js'),
      sc = require('./controllers/searchController'),
      uc = require('./controllers/userController'),
      fc = require('./controllers/favoritesController'),
      ac = require('./controllers/adminController');


const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db');

        db.find_user([profile.identities[0].user_id])
            .then(user => {
                if (user[0]) {
                    return done(null, user[0].id)
                }
                else {
                    const user = profile._json;
                    db.create_user([user.given_name, user.family_name, user.email, false, user.identities[0].user_id, true])
                        .then(user => {
                            return done(null, user[0].id);
                        })
                }
            })

    }))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/loading',
    failureRedirect: '/auth'
}));
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(404).send('User Not Found');
    }
    else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/')
})


//--------------GLASSDOOR--------------//

app.get(`http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=${process.env.REACT_APP_GLASSDOOR_PARTNER_ID}&t.k=${process.env.REACT_APP_GLASSDOOR_KEY}&action=jobs-stats&“&countryId=1&jobTitle=all&userip=localhost:3000&useragent=Mozilla/%2F4.0`, gdc.getJobs)


//----------COLLEGES TO DB------------//

// app.get('/api/getcolleges', (req,res) => {
//     // console.log("hello")
//     axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools.json?fields=id,school.name,school.city,school.state,school.school_url,school.locale,school.region_id&per_page=100&page=76&api_key=${process.env.REACT_APP_COLLEGE_API_KEY}`)
//          .then( res => {
//             //  console.log('res: ',res);
//              for(var i=0; i < res.data.results.length; i++){
//                  const db = req.app.get('db');
//                  const school = res.data.results[i];
//                  db.add_all_colleges([school["school.name"], school["school.state"], school["school.city"], school["school.school_url"], school.id, school["school.locale"], school["school.region_id"]]).then( resp => res.send(resp) );
//              }
//          })
// })


//--------SEARCH COLLEGES ENDPOINTS---------//
app.get('/getcolleges', sc.getAllColleges);
app.get('/getcollegesbystate/:state', sc.getCollegesByState);
app.get('/getcollegesbyname/:name', sc.getCollegesByName);
app.get('/getcollegesbystateandname/:state/:name', sc.getCollegesByStateAndName);
app.get('/getcollegeinfo/:id', sc.getCollegeInfo)



//---------ADD TO FAVORITES ENDPOINTS--------//
app.post('/addcollegetofavorites/:id/:user', fc.addCollege);


//--------- USER FAVORITES--------------//
app.get('/getfavecolleges/:id', fc.getFaveColleges);
app.delete('/removeFaveCollege/:collegeId/:userId', fc.removeFavorite);

//--------SaveUserInfo------------------//
app.put('/api/saveuser/:id', uc.saveUser);



//---------------ADMIN------------------//
app.get('/getallstudents', ac.getAllStudents);
app.get('/getstudentbyschoolandname/:school/:name', ac.getStudentBySchoolAndName);
app.get('/getstudentbyschool/:school', ac.getStudentBySchool);
app.get('/getstudentbyname/:name', ac.getStudentByName);
app.delete('/removestudent/:id', ac.removeStudent);   
app.get('/detailedprofile/:id', ac.getStudentInfo);
app.get('/getfavorites/:id', ac.getFavorites);


passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    app.get('db').find_current_user([id])
        .then(user => {

            done(null, user[0]);
        })

})


const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));