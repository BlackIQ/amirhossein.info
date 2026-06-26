import express from "express";
import cors from "cors";
import morgan from "morgan";

import Routes from "$app/routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set("json spaces", 2);

app.use(morgan("dev"));

app.use("/api", Routes);
app.use("*", (req, res) =>
  res.status(404).send({
    url: req.originalUrl,
    method: req.method,
    message: "Page not found",
  })
);

export default app;
