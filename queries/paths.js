export const getPaths_DB = `SELECT * FROM paths ORDER BY id ASC`;
export const getPathsById_DB = `SELECT * FROM paths WHERE paths.id = $1`;
