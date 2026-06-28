import type { Types } from "mongoose";

export interface Note {
  _id: Types.ObjectId;
  title: string;
  details: string;
  content: string;
  thumbnail: string;
  createdAt?: Date;
  updatedAt?: Date;
}
