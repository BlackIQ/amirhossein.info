import mongoose from "mongoose";
import { MONGO_CONNECTION_STRING } from "@src/config/index.js";

export const initDB = async () => {
  await mongoose.connect(MONGO_CONNECTION_STRING);

  // connection.connection.on("connected", () => {
  //   console.log("Connected to mongo.");
  // });

  // connection.connection.on("error", (error) => {
  //   console.log("Mongo connection error:", error);
  // });
};
