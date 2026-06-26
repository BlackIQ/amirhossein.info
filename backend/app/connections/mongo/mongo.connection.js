import mongoose from "mongoose";

import {MONGO_CONNECTION_STRING} from "$app/config/index.js";

export const mongodb = mongoose.createConnection(MONGO_CONNECTION_STRING, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Connected to mongodb.");
    }
});
