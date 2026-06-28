import { Schema, model } from "mongoose";

import type { Resume } from "@src/modules/resume/resume.type.js";

const schema = new Schema<Resume>(
  {
    priority: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ResumeModel = model<Resume>("Resume", schema);

export default ResumeModel;
