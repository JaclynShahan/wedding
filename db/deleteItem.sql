DELETE FROM listitems WHERE item_id = $1
RETURNING *