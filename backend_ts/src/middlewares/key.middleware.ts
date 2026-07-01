import type { Request, Response, NextFunction } from "express";

import { APP_SECRET } from "@src/config/index.js";

const key = async (req: Request, res: Response, next: NextFunction) => {
  const { apikey } = req.headers;

  if (!apikey) {
    return res.status(401).json({ message: "Unautorized" });
  }

  if (apikey !== APP_SECRET) {
    return res.status(401).json({ message: "Unautorized" });
  }

  next();
};

export default key;
