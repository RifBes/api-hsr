import { queries } from "../queries/index.js";
import { pool } from "../db.js";

export const getElements = async (req, res) => {
  try {
    const result = await pool.query(queries.getElements_DB);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};