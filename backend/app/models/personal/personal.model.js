import { mongodb } from "$app/connections/mongo/mongo.connection.js";

import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
  label: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
};

const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Info", schema);
