module.exports = {
    saveUser: (req, res) => {
        const db = req.app.get('db');
        const user = req.body;
        const userId = req.params.id;

        db.update_user( [userId, user.highschool, user.currentYear, user.city, user.state, false] ).then( user => {
            res.send(user);
        })
    }
}
