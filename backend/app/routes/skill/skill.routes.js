import express from "express";

import { Skill } from "$app/controllers/index.js";
import { key } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", key, Skill.CREATE);
router.get("/", Skill.ALL);
router.get("/:id", Skill.SINGLE);
router.delete("/:id", key, Skill.DELETE);
router.patch("/:id", key, Skill.UPDATE);

export default router;
