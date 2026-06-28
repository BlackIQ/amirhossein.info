import express from "express";

import { Message } from "$app/controllers/index.js";
import { key } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", Message.CREATE);
router.get("/", key, Message.ALL);
router.get("/:id", key, Message.SINGLE);
router.delete("/:id", key, Message.DELETE);
router.patch("/:id", key, Message.UPDATE);

export default router;
