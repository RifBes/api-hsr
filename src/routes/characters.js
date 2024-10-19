import express from "express";

import {
  getCharacter,
  getCharacterByID,
  getCharacterRandom,
} from "../controllers/characters.js";

const router = express.Router();

// /users/2 => req/params { id: 2}
router.get("/random", getCharacterRandom);
router.get("/:id", getCharacterByID);
router.get("/", getCharacter);

export default router;
