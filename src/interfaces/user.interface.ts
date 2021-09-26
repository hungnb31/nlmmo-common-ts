import { Document } from "mongoose";

export interface IUser extends Document {
  readonly id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  username: string;
  avatar: string;
  userCode: string;
  active: boolean;
  description: string;
  phone: string;
  facebook: string;
  address: string;
  badges: any[];
  hasShop: boolean;
  refreshToken: string;
}
