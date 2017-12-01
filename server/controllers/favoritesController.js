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

    addScholarship: (req, res) => {
        const db = req.app.get('db');
        const { scholarshipLink, scholarshipTitle, userId } = req.body;

        db.add_fave_schol( [scholarshipTitle, scholarshipLink, userId] ).then( scholarship => {
            res.send(scholarships)
        })
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

    getFaveScholarships: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.get_fave_schols( [id] ).then( scholarships => {
            res.send(scholarships)
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
    },

    removeFaveScholarship: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.remove_fave_schol( [id] ).then();
    }

}