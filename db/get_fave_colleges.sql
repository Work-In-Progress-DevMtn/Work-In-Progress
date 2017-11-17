SELECT * FROM college_faves as c 
JOIN users as u on c.user_id = u.id
JOIN collegeinfo as ci on c.college_id = ci.id
WHERE u.id = 1