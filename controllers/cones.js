import { queries } from "../queries/index.js";
import { pool } from "../db.js";

export const getCones = async (req, res) => {
  let { path, rarity } = req.query;
  try {
    const result = await pool.query(queries.getCones_DB);
    // res.status(200).json(result.rows);
    const cones = result.rows;

    const filterFn = (cones) => {
      const conditions = [];
      if (path)
        conditions.push(cones.path.toLowerCase() === path.toLowerCase());
      if (rarity) conditions.push(cones.rarity === Number(rarity));
      return conditions.every(Boolean);
    };
    const filteredCones = cones.filter(filterFn);
    res.status(200).json(filteredCones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getConesById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(queries.getConesById_DB, [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
