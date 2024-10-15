import { queries } from "../queries/index.js";
import { pool } from "../db.js";

const queryDatabase = async (query, params = null) => {
  try {
    if (!params) {
      return await pool.query(query);
    } else {
      return await pool.query(query, [params]);
    }
  } catch (error) {
    throw error;
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
    const result = await queryDatabase(queries.getCharacter_DB);
    const characters = processResult(result.rows);
    res.status(200).json(characters);
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
