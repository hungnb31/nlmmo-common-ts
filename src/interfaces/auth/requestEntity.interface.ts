import { Request } from "express";
import { IAdmin } from "../admin.interface";
import { IUser } from "../user.interface";

export interface IRequestWithUser extends Request {
  user: IUser;
}

export interface IRequestWithAdmin extends Request {
  user: IAdmin;
}
