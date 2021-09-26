import { Document } from "mongoose";

export interface ISystemTransaction extends Document {
  readonly id: string;
  sender: string;
  receiver: string;
  totalCoin: number;
  type: string;
  note: string;
  handleBy: string;
}
