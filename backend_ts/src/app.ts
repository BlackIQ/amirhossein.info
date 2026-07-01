import express from "express";
import cors from "cors";
import morgan from "morgan";

import { initDB } from "@src/connections/mongo/mongo.connection.js";

import Experience from "@src/modules/experience/experience.route.js";
import Skill from "@src/modules/skill/skill.route.js";
import Social from "@src/modules/social/social.route.js";
import Resume from "@src/modules/resume/resume.route.js";
import Message from "@src/modules/message/message.route.js";
import Base from "@src/modules/base/base.route.js";
import Note from "@src/modules/note/note.route.js";

const app = express();

initDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set("json spaces", 2);

app.use(morgan("dev"));

app.use("/api/experiences", Experience);
app.use("/api/skills", Skill);
app.use("/api/socials", Social);
app.use("/api/resumes", Resume);
app.use("/api/messages", Message);
app.use("/api/base", Base);
app.use("/api/notes", Note);

app.use("*", (req, res) =>
  res.status(404).send({
    url: req.originalUrl,
    method: req.method,
    message: "Page not found",
  }),
);

export default app;
