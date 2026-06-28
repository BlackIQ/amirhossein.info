import type { Request, Response } from "express";

import Social from "@src/modules/social/social.model.js";

export const CREATE = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const social = await Social.create(data);

    return res.status(200).send(social);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req: Request, res: Response) => {
  try {
    const socials = await Social.find({ show: true }).sort({ priority: 1 });

    return res.status(200).send(socials);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const social = await Social.findById(id);

    if (!social) {
      return res.status(404).send({ message: "Social did not found" });
    }

    return res.status(200).send(social);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const social = await Social.findByIdAndDelete(id);

    if (!social) {
      return res.status(404).send({ message: "Social did not found" });
    }

    return res.status(200).send({ message: "Social deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const social = await Social.findByIdAndUpdate(id, data);

    if (!social) {
      return res.status(404).send({ message: "Social did not found" });
    }

    return res.status(200).send({ message: "Social updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
