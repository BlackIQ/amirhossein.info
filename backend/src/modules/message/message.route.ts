import express from "express";

import {
  CREATE,
  ALL,
  SINGLE,
  DELETE,
  UPDATE,
} from "@src/modules/message/message.controller.js";
import { key } from "@src/middlewares/index.js";

const router = express.Router();

router.post("/", CREATE);
router.get("/", key, ALL);
router.get("/:id", key, SINGLE);
router.delete("/:id", key, DELETE);
router.patch("/:id", key, UPDATE);

export default router;
