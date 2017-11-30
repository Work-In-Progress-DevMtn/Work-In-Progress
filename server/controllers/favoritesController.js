module.exports = {
    addCollege: (req, res) => {
        const db = req.app.get('db');
        const { id, user } = req.params;

        db.add_fave_college( [id, user] ).then( favorites => {
            res.send(favorites);
        } )
    },

    addJob: (req, res) => {
        const db = req.app.get('db');
        const { jobTitle, jobLink, userId } = req.body;
        
        db.add_fave_job( [jobTitle, jobLink, userId] ).then(jobs => {
            res.send(jobs);
        });
        
    },

    getFaveColleges: (req, res) => {
        const db = req.app.get('db');
        const userId = req.params.id;
        const user = req.body;

        db.get_fave_colleges([userId]).then(colleges => {
            res.send(colleges)
        })
    },

    getFaveJobs: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.get_fave_jobs([ id ]).then( jobs => {
            res.send(jobs)
        })
    },

    removeStudent: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.remove_user_from_faves([id]).then();
    },

    removeFavoriteCollege: (req, res) => {
        const db = req.app.get('db');
        const { collegeId,userId } = req.params;

        db.remove_fave_college([collegeId, userId]).then();
    },

    removeFavoriteJob: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.remove_fave_job( [id] ).then();
    }

}