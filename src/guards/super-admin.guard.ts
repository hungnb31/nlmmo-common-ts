import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { RoleType } from 'src/constants/roles.constant'

@Injectable()
export class SuperAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    if (request.user?.role !== RoleType.SADMIN) {
      throw new HttpException('Blocked Request!', HttpStatus.FORBIDDEN)
    }
    return true
  }
}
