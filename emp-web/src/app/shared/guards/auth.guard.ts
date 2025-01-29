import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  return authService.getToken().pipe(
    map((token) => {
      if (token) return true;
      return router.createUrlTree(['/auth/login']);
    })
  );
};
