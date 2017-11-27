DELETE FROM college_faves
WHERE user_id =$1;

DELETE FROM jobs 
WHERE user_id = $1;

DELETE FROM scholarships
WHERE user_id = $1;

DELETE FROM users 
WHERE id = $1;