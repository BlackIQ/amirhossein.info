import mongoose from "mongoose";
import { MONGO_CONNECTION_STRING } from "@src/config/index.js";

export const mongodb = mongoose.createConnection(MONGO_CONNECTION_STRING);

mongodb.on("connected", () => {
  console.log("Connected to mongo.");
});

mongodb.on("error", (error) => {
  console.log("Mongo connection error:", error);
});
