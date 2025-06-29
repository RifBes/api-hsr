import express from "express";

import { getElements, getElementsById } from "../controllers/elements.js";

const router = express.Router();

router.get("/:id", getElementsById);
router.get("/", getElements);

export default router;
