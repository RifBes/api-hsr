import express from "express";

import { getCharacter, getCharacterByID } from "../controllers/characters.js";

const router = express.Router();

// all routes here starting with /characters
router.get("/", getCharacter);

// /users/2 => req/params { id: 2}
router.get("/:id", getCharacterByID);

export default router;
