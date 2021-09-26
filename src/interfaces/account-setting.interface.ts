import { Document, Types } from "mongoose";

export interface IAccountSetting extends Document {
  readonly id: string;
  whichOwner: string;
  owner: string;
  verifyEmail: boolean;
  verifyAccount: boolean;
  identification: boolean;
  lastReadNotification: Types.ObjectId;
  lastUpdateUsername: Date;
  lastUpdateShortname: Date;
}
