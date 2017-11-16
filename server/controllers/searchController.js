module.exports = {
    getAllColleges: (req, res) => {
        const db = req.app.get('db');

        db.display_all_colleges().then( colleges => {
            res.send(colleges)
        })
    }
}