import { Expose } from "class-transformer"; 

export class UserPublicDTO {
  @Expose()
  name: string;
  @Expose()
  email: string;
  @Expose()
  username: string;
  @Expose()
  avatar: string;
  @Expose()
  userCode: string;
  @Expose()
  active: boolean;
  @Expose()
  description: string;
  @Expose()
  phone: string;
  @Expose()
  facebook: string;
  @Expose()
  addess: string;
  @Expose()
  badges: object;
  @Expose()
  hasShop: boolean;
}