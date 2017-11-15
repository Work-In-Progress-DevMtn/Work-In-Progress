INSERT INTO users
(   first_name,
    last_name,
    email,
    is_admin,
    auth_id)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;