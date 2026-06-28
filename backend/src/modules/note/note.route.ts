import express from "express";

import {
  CREATE,
  ALL,
  SINGLE,
  DELETE,
  UPDATE,
} from "@src/modules/note/note.controller.js";
import { key } from "@src/middlewares/index.js";

const router = express.Router();

router.post("/", key, CREATE);
router.get("/", ALL);
router.get("/:id", SINGLE);
router.delete("/:id", key, DELETE);
router.patch("/:id", key, UPDATE);

export default router;
