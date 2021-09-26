import { Injectable } from "@nestjs/common";
import { Response } from "express";

@Injectable()
export class ISuccessResponse {
  build(
    res: Response,
    statusCode: number,
    message: string,
    data: Record<any, any> = {}
  ): Response {
    return res.status(statusCode).json({
      statusCode,
      message,
      data,
    });
  }
}
