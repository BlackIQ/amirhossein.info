import { Schema, model } from "mongoose";

import type { Experience } from "@src/modules/experience/experience.type.js";

const schema = new Schema<Experience>(
  {
    priority: {
      type: Number,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    duties: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ExperienceModel = model<Experience>("Experience", schema);

export default ExperienceModel;
