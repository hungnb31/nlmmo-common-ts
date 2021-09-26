import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { RoleType } from "../constants/roles.constant";

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const adminRole = [RoleType.ADMIN, RoleType.SADMIN];
    if (!adminRole.includes(request.user.role)) {
      throw new HttpException("Blocked Request!", HttpStatus.FORBIDDEN);
    }
    return true;
  }
}
