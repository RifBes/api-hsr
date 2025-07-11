import { pool } from "../db.js";
import { queries } from "../queries/index.js";

const queryDatabase = async (query, params = null) => {
  if (!pool) {
    throw new Error("Database pool is not initialized");
  }

  try {
    const queryParams = Array.isArray(params)
      ? params
      : params
      ? [params]
      : null;

    return queryParams
      ? await pool.query(query, queryParams)
      : await pool.query(query);
  } catch (error) {
    throw new Error(`Database query failed: ${error.message}. Query: ${query}`);
  }
};

const processResult = (rows) => {
  const characters = [];
  rows.forEach((row) => {
    const existingCharacter = characters.find(
      (character) => character.id === row.id
    );
    if (existingCharacter) {
      existingCharacter.eidolons.push({
        number: row.number,
        name: row.eidolon_name,
        description: row.description,
        image: row.eidolon_image,
      });
    } else {
      characters.push({
        id: row.id,
        name: row.name,
        path: row.path,
        element: row.element,
        rarity: row.rarity,
        image: row.image,
        eidolons: [
          {
            number: row.number,
            name: row.eidolon_name,
            description: row.description,
            image: row.eidolon_image,
          },
        ],
      });
    }
  });
  return characters;
};

export const getCharacter = async (req, res) => {
  try {
    let { path, element, rarity } = req.query;
    const result = await queryDatabase(queries.getCharacter_DB);
    // const characters = result.rows;
    const characters = processResult(result.rows);
    // --------------------------------
    const filterFn = (character) => {
      const conditions = [];
      if (path)
        conditions.push(character.path.toLowerCase() === path.toLowerCase());
      if (element)
        conditions.push(
          character.element.toLowerCase() === element.toLowerCase()
        );
      if (rarity) conditions.push(character.rarity === Number(rarity));
      return conditions.every(Boolean);
    };
    const filteredCharacters = characters.filter(filterFn);
    res.status(200).json(filteredCharacters);
    // --------------------------------
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCharacterByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (isNaN(id)) {
      const result = await queryDatabase(queries.getCharacterByName_DB, id);
      const characters = processResult(result.rows);
      res.status(200).json(characters);
    } else {
      const result = await queryDatabase(queries.getCharacterByID_DB, id);
      const characters = processResult(result.rows);
      res.status(200).json(characters);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCharacterRandom = async (req, res) => {
  try {
    const result = await queryDatabase(queries.getCharacter_DB);
    const characters = processResult(result.rows);

    const randomId = Math.floor(Math.random() * characters.length) + 1;
    const character = characters.filter((char) => char.id === randomId);

    res.status(200).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
