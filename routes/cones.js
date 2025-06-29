import express from "express";

import { getCones, getConesById } from "../controllers/cones.js";

const router = express.Router();

router.get("/:id", getConesById);
router.get("/", getCones);

export default router;
