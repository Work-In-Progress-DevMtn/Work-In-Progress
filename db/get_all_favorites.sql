SELECT ci.school_name, ci.school_state, ci.school_city, ci.website FROM college_faves as c 
JOIN users as u on c.user_id = u.id
JOIN collegeinfo as ci on c.college_id = ci.id
WHERE u.id = $1;

-- SELECT * FROM jobs 
-- WHERE user_id = $1;

-- SELECT * FROM scholarships
-- WHERE user_id = $1;