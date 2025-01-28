import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { NRequest } from '../types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: NRequest = context.switchToHttp().getRequest();
    const user = await validateRequest(request, this.authService);
    if (user) {
      request.user = user;
      return true;
    }
    return false;
  }
}

export async function validateRequest(
  request: NRequest,
  authService: AuthService,
) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader || !authorizationHeader?.includes('Bearer')) {
    throw new UnauthorizedException(
      `Authorization token isn't in required format`,
    );
  }

  const token = authorizationHeader.split(' ')[1];

  if (!token) {
    throw new UnauthorizedException(`Authorization token isn't available`);
  }

  const user = await authService.validateToken(token);

  return user;
}
