import type { Types } from "mongoose";

export interface Social {
  priority: number | null;
  show: boolean;
  label: string;
  value: string;
  url: string;
}
