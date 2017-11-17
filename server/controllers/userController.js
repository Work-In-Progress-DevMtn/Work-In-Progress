module.exports = {
    saveUser:((req, res) => {
        const db = req.app.get('db');
        const user = req.body;
        const userId = req.params.id;
        console.log('userid:', userId);
        console.log('reqbody:', user);
        db.update_user([userId, user.fullName, '', user.email, user.highschool, user.current_year, user.location_city, user.location_state, user.about]).then(user => {
            res.status(200).send(user);
        })
    })
}