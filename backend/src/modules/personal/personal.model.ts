import { Schema, model } from "mongoose";

import type { Personal } from "@src/modules/personal/personal.type.js";

const schema = new Schema<Personal>(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const InfoModel = model<Personal>("Info", schema);

export default InfoModel;
