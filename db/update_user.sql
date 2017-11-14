UPDATE users 
SET { first_name = $2 }
SET { last_name = $3 }
SET { email = $4 }
SET { high_school = $5 }
SET { current_year = $6 }
SET { location_city = $7 }
SET { location_state = $8 }
SET { about = $9 }
WHERE id =$1