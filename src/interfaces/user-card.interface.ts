import { Document } from "mongoose";

export interface IUserCard extends Document {
  readonly id: string;
  shop: string;
  owner: string;
  cardHolder: string;
  cardNumber: string;
  bank: string;
}
