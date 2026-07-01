import type { Request, Response } from "express";

export const PING = async (req: Request, res: Response) => {
  return res.status(200).send({ message: "Pong" });
};

export const IP = async (req: Request, res: Response) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  return res.status(200).send({ ip });
};
