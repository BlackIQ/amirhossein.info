import express from "express";

import { Base } from "$app/controllers/index.js";

const router = express.Router();

router.get("/ping", Base.PING);
router.get("/ip", Base.IP);

export default router;
