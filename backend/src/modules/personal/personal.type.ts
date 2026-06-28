import type { Types } from "mongoose";

export interface Personal {
  _id: Types.ObjectId;
  label: string;
  value: string;
  createdAt?: Date;
  updatedAt?: Date;
}
