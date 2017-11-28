module.exports = {
    addCollege: (req, res) => {
        const db = req.app.get('db');
        const { id, user } = req.params;

        db.add_fave_college( [id, user] ).then( favorites => {
            res.send(favorites);
        } )
    },

    getFaveColleges: (req, res) => {
        const db = req.app.get('db');
        const userId = req.params.id;
        const user = req.body;
        db.get_fave_colleges([userId]).then(colleges => {
            res.send(colleges)
            // console.log('colleges',colleges);
        })
    },

    removeStudent: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.remove_user_from_faves([id]).then();
    }
}