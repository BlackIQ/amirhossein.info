import mongoose from "mongoose";
import { MONGO_CONNECTION_STRING } from "@src/config/index.js";

export const mongodb = mongoose.connect(MONGO_CONNECTION_STRING);

mongodb.then(() => {
  console.log("Connected to mongo.");
});

mongodb.catch((error) => {
  console.log("Mongo connection error:", error);
});
