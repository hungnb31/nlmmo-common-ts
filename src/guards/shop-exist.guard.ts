import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common'

@Injectable()
export class ShopExistGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    if (!request.user.hasShop) {
      throw new HttpException('Bạn chưa sở hữu shop!', HttpStatus.BAD_REQUEST)
    }
    return true
  }
}
