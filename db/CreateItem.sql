INSERT INTO listitems ('checklistItem', 'cost', 'notes')
VALUES ($1, $2, $3, $4)
RETURNING *