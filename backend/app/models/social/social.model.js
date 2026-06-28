import { mongodb } from "$app/connections/mongo/mongo.connection.js";

import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
  priority: {
    type: Number,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
  show: {
    type: Boolean,
    default: true,
  },
};

const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Social", schema);
