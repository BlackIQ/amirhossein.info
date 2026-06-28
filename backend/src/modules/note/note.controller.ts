import type { Request, Response } from "express";

import Note from "@src/modules/note/note.model.js";

export const CREATE = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const note = await Note.create(data);

    return res.status(200).send(note);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const ALL = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find().sort({ priority: 1 });

    return res.status(200).send(notes);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).send({ message: "Note did not found" });
    }

    return res.status(200).send(note);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).send({ message: "Note did not found" });
    }

    return res.status(200).send({ message: "Note deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const note = await Note.findByIdAndUpdate(id, data);

    if (!note) {
      return res.status(404).send({ message: "Note did not found" });
    }

    return res.status(200).send({ message: "Note updated" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
