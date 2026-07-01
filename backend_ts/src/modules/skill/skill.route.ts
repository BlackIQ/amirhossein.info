import express from "express";

import {
  CREATE,
  ALL,
  SINGLE,
  DELETE,
  UPDATE,
} from "@src/modules/skill/skill.controller.js";

import key from "@src/middlewares/key.middleware.js";

const router = express.Router();

router.post("/", key, CREATE);
router.get("/", ALL);
router.get("/:id", SINGLE);
router.delete("/:id", key, DELETE);
router.patch("/:id", key, UPDATE);

export default router;
