module.exports = {
    getAllColleges: (req, res) => {
        const db = req.app.get('db');

        db.display_all_colleges().then( colleges => {
            res.send(colleges)
        })
    },

    getCollegesByState: (req, res) => {
        const db = req.app.get('db');
        const { state } = req.params;

        db.get_colleges_by_state( [state] ).then( colleges => {
            res.send(colleges);
        })
    },

    getCollegesByName: (req, res) => {
        const db = req.app.get('db');
        const { name } = req.params;

        db.get_colleges_by_name( ['%' + name + '%'] ).then(colleges => {
            res.send(colleges);
        })
    },

    getCollegesByStateAndName: (req, res) => {
        const db = req.app.get('db');
        const { state, name } = req.params;

        db.get_colleges_by_state_and_name( [state, '%' + name + '%']).then( colleges => {
            res.send(colleges);
        })
    },

    getCollegeInfo: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        console.log(id)

        db.get_college_info([id]).then(college => {
            res.send(college);
        })
    }
}