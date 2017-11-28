module.exports = {
    getAllStudents: (req, res) => {
        const db = req.app.get('db');

        db.get_all_users().then( students => {
            res.send(students);
        })
    },

    getStudentBySchoolAndName: (req, res) => {
        const db = req.app.get('db');
        const { school, name } = req.params

        db.get_student_by_school_and_name( [school, name] ).then( students => {
            res.send(students);
        })
    },

    getStudentBySchool: (req, res) => {
        const db = req.app.get('db');
        const { school } = req.params;

        db.get_student_by_school( [school] ).then( students => {
            res.send(students);
        })
    },

    getStudentByName: (req, res) => {
        const db = req.app.get('db');
        const { name } = req.params;

        db.get_student_by_name( [name] ).then( students => {
            res.send(students);
        })
    },

    removeStudent: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.remove_user( [id] ).then();
    },

    getStudentInfo: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_user([id]).then( student => {
            res.send(student)
        })
    },

    getFavorites: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.get_all_favorites([id]).then( favorites => {
            res.send(favorites)
        })
    }
}