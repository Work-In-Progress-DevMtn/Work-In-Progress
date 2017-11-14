INSERT INTO users
(   first_name,
    last_name,
    email,
    high_school,
    current_year,
    location_city,
    location_state,
    about,
    is_admin,
    auth_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;