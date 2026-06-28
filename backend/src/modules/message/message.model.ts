import { mongodb } from "@src/connections/mongo/mongo.connection.js";

import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
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

const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Message", schema);
