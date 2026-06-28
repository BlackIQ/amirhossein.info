import express from "express";

import { Experience } from "$app/controllers/index.js";
import { key } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", key, Experience.CREATE);
router.get("/", Experience.ALL);
router.get("/:id", Experience.SINGLE);
router.delete("/:id", key, Experience.DELETE);
router.patch("/:id", key, Experience.UPDATE);

export default router;
