import { Document, Types } from "mongoose";

export interface IShop extends Document {
  readonly id: string;
  owner: string;
  name: string;
  shortName: string;
  avatar: string;
  description: string;
  badges: Types.ObjectId;
}
