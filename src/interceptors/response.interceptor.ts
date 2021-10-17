import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IResponse {
  statusCode: number;
  message: string;
  data: object;
}

export interface IData {
  message: string;
  result: object;
  meta?: object;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    handler: CallHandler,
  ): Observable<IResponse> {
    return handler
      .handle()
      .pipe(
        map((data: IData): IResponse => ({
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: data.message,
          data: {
            result: data.result,
            meta: data.meta || {}
          }
        })),
      );
  }
}