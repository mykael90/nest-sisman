import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from 'src/auth/auth.service';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );

      if (!requiredRoles) {
        return true;
      }

      const request = context.switchToHttp().getRequest();
      const { user } = request;

      // console.log(user, requiredRoles);

      const rolesFiltered = requiredRoles.filter((role) => role === user.role);

      return !!rolesFiltered.length;
    } catch (e) {
      return false;
    }
  }
}
