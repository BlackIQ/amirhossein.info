import express from "express";

import Experience from "$app/routes/experience/experience.routes.js";
import Skill from "$app/routes/skill/skill.routes.js";
import Social from "$app/routes/social/social.routes.js";
import Resume from "$app/routes/resume/resume.routes.js";
import Message from "$app/routes/message/message.routes.js";
import Base from "$app/routes/base/base.routes.js";

const router = express.Router();

router.use("/experiences", Experience);
router.use("/skills", Skill);
router.use("/socials", Social);
router.use("/resumes", Resume);
router.use("/messages", Message);
router.use("/base", Base);

export default router;
