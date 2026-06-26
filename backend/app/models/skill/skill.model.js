import {mongodb} from "$app/connections/mongo/mongo.connection.js";

import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
    priority: {
        type: Number,
        default: null,
    },
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
        unique: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
        default: null,
    },
};

const schema = new mongooseSchema(schemaModel, {timestamps: true});

export default mongodb.model("Skill", schema);
