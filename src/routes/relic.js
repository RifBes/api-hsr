import express from "express";

import { getRelics } from "../controllers/relic.js";

const router = express.Router();

router.get("/", getRelics);

export default router;
