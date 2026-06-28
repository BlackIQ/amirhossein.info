import type { Types } from "mongoose";

export interface Social {
  _id: Types.ObjectId;
  priority: number | null;
  label: string;
  value: string;
  show: boolean;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}
