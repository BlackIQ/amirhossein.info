import type { Request, Response } from "express";

import Experience from "@src/modules/experience/experience.model.js";

export const CREATE = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const experience = await Experience.create(data);

    return res.status(200).send(experience);
  } catch (error) {
    const err = error as Error;

    return res.status(500).send({ message: err.message });
  }
};

export const ALL = async (req: Request, res: Response) => {
  try {
    const experiences = await Experience.find().sort({ priority: 1 });

    return res.status(200).send(experiences.reverse());
  } catch (error) {
    const err = error as Error;

    return res.status(500).send({ message: err.message });
  }
};

export const SINGLE = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const experience = await Experience.findById(id);

    if (!experience) {
      return res.status(404).send({ message: "Experience did not found" });
    }

    return res.status(200).send(experience);
  } catch (error) {
    const err = error as Error;

    return res.status(500).send({ message: err.message });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const experience = await Experience.findByIdAndDelete(id);

    if (!experience) {
      return res.status(404).send({ message: "Experience did not found" });
    }

    return res.status(200).send({ message: "Experience deleted" });
  } catch (error) {
    const err = error as Error;

    return res.status(500).send({ message: err.message });
  }
};

export const UPDATE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const experience = await Experience.findByIdAndUpdate(id, data);

    if (!experience) {
      return res.status(404).send({ message: "Experience did not found" });
    }

    return res.status(200).send({ message: "Experience updated" });
  } catch (error) {
    const err = error as Error;

    return res.status(500).send({ message: err.message });
  }
};
