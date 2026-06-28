import type { Types } from "mongoose";

export interface Message {
  _id: Types.ObjectId;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}
