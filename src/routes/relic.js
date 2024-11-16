import express from "express";

import { getRelics, getRelicsType } from "../controllers/relic.js";

const router = express.Router();

router.get("/:type", getRelicsType);
router.get("/", getRelics);

export default router;
