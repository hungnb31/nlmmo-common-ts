import { Document } from "mongoose";

export interface ICategory extends Document {
  readonly id: string;
  title: string;
  baseImage: string;
  homepageImage: string;
}
