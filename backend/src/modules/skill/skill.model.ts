import mongoose from "mongoose";

import { mongodb } from "@src/connections/mongo/mongo.connection.js";
import type { Skill } from "@src/modules/skill/skill.type.js";

const mongooseSchema = mongoose.Schema;

const schema = new mongooseSchema<Skill>(
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
      unique: true,
    },
    show: {
      type: Boolean,
      default: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      default: null,
    },
  },
  { timestamps: true },
);

const SkillModel = mongodb.model<Skill>("Skill", schema);

export default SkillModel;
