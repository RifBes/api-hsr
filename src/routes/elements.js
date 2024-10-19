import express from "express";

import { getElements } from "../controllers/elements.js";

const router = express.Router();

router.get("/", getElements);

export default router;
