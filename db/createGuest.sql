INSERT INTO guestlist ("name", "address", "email")
VALUES ($1, $2, $3)
RETURNING *