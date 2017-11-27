module.exports = {
    addCollege: (req, res) => {
        const db = req.app.get('db');
        const { id, user } = req.params;

        db.add_fave_college( [id, user] ).then( favorites => {
            res.send(favorites);
        } )
    },

    removeStudent: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.remove_user_from_faves([id]).then();
    }
}