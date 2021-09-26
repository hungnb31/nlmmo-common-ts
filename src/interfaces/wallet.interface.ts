import { Document } from "mongoose";

export interface IWallet extends Document {
  readonly id: string;
  whichOwner: string;
  owner: string;
  coin: number;
}
