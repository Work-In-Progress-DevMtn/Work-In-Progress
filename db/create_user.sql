INSERT INTO users
(   first_name,
    last_name,
    email,
    is_admin,
    auth_id,
    new_user)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;