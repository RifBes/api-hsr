export const getRelics_DB = `SELECT * FROM relics ORDER BY id ASC`;
export const getRelicsById = `SELECT * FROM relics WHERE relics.id = $1`;
export const getRelicsType_DB = `
SELECT * FROM relics 
WHERE relics.type = $1 
ORDER BY id ASC`;
