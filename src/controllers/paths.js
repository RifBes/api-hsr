import { queries } from "../queries/index.js";
import { pool } from "../db.js";

export const getPaths = async (req, res) => {
  try {
    const result = await pool.query(queries.getPaths_DB);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPathsById = async (req, res) => {
  const { name } = req.params;

  try {
    const result = await pool.query(queries.getPathsById_DB, [name]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
