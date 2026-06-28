import type { Types } from "mongoose";

export type Skill = {
  _id: Types.ObjectId;
  priority: number | null;
  label: string;
  value: string;
  show: boolean;
  parent?: Types.ObjectId | null;
  createdAt?: Date;
  updatedAt?: Date;
};
