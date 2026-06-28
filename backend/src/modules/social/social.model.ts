import { Schema, model } from "mongoose";

import type { Social } from "@src/modules/social/social.type.js";

const schema = new Schema<Social>(
  {
    priority: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const SocialModel = model<Social>("Social", schema);

export default SocialModel;
