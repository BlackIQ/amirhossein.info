import { mongo } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  message: {
    type: String,
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongo.model("Message", schema);
