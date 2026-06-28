// import type { Types } from "mongoose";

export interface Experience {
  priority: number | null;
  show: boolean;
  position: string;
  companyName: string;
  location: string;
  startDate: string;
  endDate: string;
  duties: string;
  skills: string;
  url: string;
}
