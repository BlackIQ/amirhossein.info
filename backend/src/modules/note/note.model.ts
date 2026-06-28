import { Schema, model } from "mongoose";

import type { Note } from "@src/modules/note/note.type.js";

const schema = new Schema<Note>(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const NoteModel = model<Note>("Note", schema);

export default NoteModel;
