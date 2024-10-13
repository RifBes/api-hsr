import express from "express";

import {
  getCharacter,
  getCharacterByID,
  getCharacterByName,
} from "../controllers/characters.js";

const router = express.Router();

// /users/2 => req/params { id: 2}
router.get("/:id", getCharacterByID);
router.get("/:name", getCharacterByName);
// all routes here starting with /characters
router.get("/", getCharacter);

export default router;
