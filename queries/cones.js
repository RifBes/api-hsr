export const getCones_DB = `SELECT * FROM cones ORDER BY id ASC`;
export const getConesById_DB = `SELECT * FROM cones WHERE cones.id = $1`;
