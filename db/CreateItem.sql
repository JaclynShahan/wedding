INSERT INTO listitems (checklist_item, cost, notes)
VALUES ($1, $2, $3)
RETURNING *