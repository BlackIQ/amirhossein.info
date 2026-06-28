import express from "express";

import { Note } from "$app/controllers/index.js";
import { key } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", key, Note.CREATE);
router.get("/", Note.ALL);
router.get("/:id", Note.SINGLE);
router.delete("/:id", key, Note.DELETE);
router.patch("/:id", key, Note.UPDATE);

export default router;
