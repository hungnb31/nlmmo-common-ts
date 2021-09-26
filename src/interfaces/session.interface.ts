import { Document } from "mongoose";

export interface ISession extends Document {
  readonly id: string;
  whichOwner: string;
  owner: string;
  ip: string;
  userAgent: string;
  browser: string;
  platform: string;
  os: string;
  isDesktop: boolean;
  time: Date;
}
