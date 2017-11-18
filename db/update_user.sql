UPDATE users 
-- SET { first_name = $2 }
-- SET { last_name = $3 }
-- SET email = $2, 
   SET high_school = $2, 
    current_year = $3, 
    location_city = $4, 
    location_state = $5, 
    new_user = $6
-- SET { about = $7 }
WHERE id =$1