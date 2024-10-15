export const getCharacter_DB = `
SELECT 
  c.id, 
  c.name, 
  c.path, 
  c.element, 
  c.rarity, 
  c.image, 
  e.number, 
  e.name AS eidolon_name, 
  e.description, 
  e.image AS eidolon_image
FROM characters c
LEFT JOIN eidolons e ON c.id = e.character_id`;

export const getCharacterByID_DB = `
SELECT 
  c.id, 
  c.name, 
  c.path, 
  c.element, 
  c.rarity, 
  c.image, 
  e.number, 
  e.name AS eidolon_name, 
  e.description, 
  e.image AS eidolon_image
FROM characters c
LEFT JOIN eidolons e ON c.id = e.character_id
WHERE c.id = $1
`;

export const getCharacterByName_DB = `
SELECT 
  c.id, 
  c.name, 
  c.path, 
  c.element, 
  c.rarity, 
  c.image, 
  e.number, 
  e.name AS eidolon_name, 
  e.description, 
  e.image AS eidolon_image
FROM 
  characters c
  LEFT JOIN eidolons e ON c.id = e.character_id
WHERE LOWER(c.name) = $1`;
