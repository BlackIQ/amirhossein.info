import mongoose from "mongoose";

import { databaseConfig } from "$app/config/index.js";

const { mongo: mongoCongig } = databaseConfig;

const url = mongoCongig.connection;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mongodb.");
  }
});

export default connection;
