import { mongodb } from "@src/connections/mongo/mongo.connection.js";

import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
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
};

const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Note", schema);
