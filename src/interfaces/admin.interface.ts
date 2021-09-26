import { Document, Types } from "mongoose";

export interface IAdmin extends Document {
  readonly id: string;
  name: string;
  role?: string;
  email: string;
  password: string;
  refreshToken?: string;
  username: string;
  avatar: string;
  description?: string;
  phone?: string;
  facebook?: string;
  address?: string;
  active: string;
  badges: Types.ObjectId[];
}
