import express from "express";

import { Resume } from "$app/controllers/index.js";
import { key } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", key, Resume.CREATE);
router.get("/", Resume.ALL);
router.get("/:id", Resume.SINGLE);
router.delete("/:id", key, Resume.DELETE);
router.patch("/:id", key, Resume.UPDATE);

export default router;
