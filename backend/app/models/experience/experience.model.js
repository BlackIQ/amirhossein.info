import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  priority: {
    type: Number,
    default: null,
  },
  position: {
    type: String,
    default: null,
  },
  companyName: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  startDate: {
    type: String,
    default: null,
  },
  endDate: {
    type: String,
    default: null,
  },
  duties: {
    type: String,
    default: null,
  },
  skills: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("Experience", schema);
