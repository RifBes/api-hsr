export const getElements_DB = `SELECT * FROM elements ORDER BY id ASC`;
export const getElementsById_DB = `SELECT * FROM elements WHERE elements.id = $1`;
