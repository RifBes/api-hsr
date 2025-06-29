import { queries } from "../queries/index.js";
import { pool } from "../db.js";

export const getRelics = async (req, res) => {
  try {
    const result = await pool.query(queries.getRelics_DB);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getRelicsType = async (req, res) => {
  const { type } = req.params;

  const typeMapping = {
    relic: "Relic Set",
    planetary: "Planetary Ornament Set",
  };

  const type_need = typeMapping[type];

  if (!type_need) {
    return res.status(400).json({ message: "Invalid type parameter" });
  }

  try {
    const result = await pool.query(queries.getRelicsType_DB, [type_need]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
