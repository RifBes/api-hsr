import express from "express";

import { getCones } from "../controllers/cones.js";

const router = express.Router();

router.get("/", getCones);

export default router;
