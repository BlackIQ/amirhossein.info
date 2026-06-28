import express from "express";

import { PING, IP } from "@src/modules/base/base.controller.js";

const router = express.Router();

router.get("/ping", PING);
router.get("/ip", IP);

export default router;
