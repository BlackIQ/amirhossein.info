import { Schema, model } from "mongoose";

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
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const SkillModel = model<Skill>("Skill", schema);

export default SkillModel;
