import express from "express";

import { getPaths, getPathsById } from "../controllers/paths.js";

const router = express.Router();

router.get("/:name", getPathsById);
router.get("/", getPaths);

export default router;
