import express from "express";

import Experience from "@src/modules/experience/experience.route.js";
import Skill from "@src/modules/skill/skill.route.js";
import Social from "@src/modules/social/social.route.js";
import Resume from "@src/modules/resume/resume.route.js";
import Message from "@src/modules/message/message.route.js";
import Base from "@src/modules/base/base.route.js";
import Note from "@src/modules/note/note.route.js";

const router = express.Router();

router.use("/experiences", Experience);
router.use("/skills", Skill);
router.use("/socials", Social);
router.use("/resumes", Resume);
router.use("/messages", Message);
router.use("/base", Base);
router.use("/notes", Note);

export default router;
