INSERT INTO songlist (artist, title)
VALUES ($1, $2)
RETURNING *