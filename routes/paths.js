import express from "express";

import { getPaths } from "../controllers/paths.js";

const router = express.Router();

router.get("/", getPaths);

export default router;
