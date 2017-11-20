UPDATE users 
SET first_name = $2,
    last_name = $3,
    email = $4, 
    high_school = $5, 
    current_year = $6, 
    location_city = $7, 
    location_state = $8,
    new_user = $9
-- SET { about = $10 }
WHERE id =$1