import { Document } from "mongoose";

export interface IAffiliate extends Document {
  readonly id: string;
  referralFrom: string;
  referralTo: string;
  rewardCoin: number;
  archivements: string[];
}
