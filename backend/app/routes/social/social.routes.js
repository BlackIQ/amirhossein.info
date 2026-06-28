import express from "express";

import { Social } from "$app/controllers/index.js";
import { key } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", key, Social.CREATE);
router.get("/", Social.ALL);
router.get("/:id", Social.SINGLE);
router.delete("/:id", key, Social.DELETE);
router.patch("/:id", key, Social.UPDATE);

export default router;
