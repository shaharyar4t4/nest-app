import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    //authorization means when user sent any data they will be "key", "API value"
    const authHeader = request.headers['authorization'];
    return authHeader === 'Bearer my-secret-token';
    return true;
  }
}
