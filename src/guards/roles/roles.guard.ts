import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles.decorater';
import { Role } from './roles.enums';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) { }

  // this is canActivate is help to check the user or admin and one more imaportant thing they execute firstly

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // this method is fetch the data from Roles file like(Admin, User)
    const requriedRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]
    );

    //inshort the below is help kar raha jo request is ko get karya ga phir is ko store or ye bha dekha ye request user kiya liya ye phir Admin kiya liya 
    if (!requriedRoles) return true;
    const request = context.switchToHttp().getRequest<{
      headers: Record<string, string>
    }>();
    // this custom Role key "x-user-role" for testing purpos
    const userRole = request.headers['csc21f1167'] as Role;
    return requriedRoles.includes(userRole);
  }
}
