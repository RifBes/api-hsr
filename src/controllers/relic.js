import { queries } from "../queries/index.js";
import { pool } from "../db.js";

export const getRelics = async (req, res) => {
  try {
    // console.log(queries);

    const result = await pool.query(queries.getRelics_DB);
    // const relics = processResult(result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
