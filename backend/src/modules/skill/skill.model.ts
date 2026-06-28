import { Schema, model, Types } from "mongoose";

import type { Skill } from "@src/modules/skill/skill.type.js";

const schema = new Schema<Skill>(
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
      default: true,
    },
    parent: {
      type: Types.ObjectId,
      ref: "Skill",
      default: null,
    },
  },
  { timestamps: true },
);

const SkillModel = model<Skill>("Skill", schema);

export default SkillModel;
