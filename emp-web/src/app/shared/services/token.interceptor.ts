import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { inject } from '@angular/core';
import { mergeMap } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);
  return authService.getToken().pipe(
    mergeMap((token) => {
      if (token) {
        const reqWithHeaders = req.clone({
          headers: req.headers.set('authorization', `Bearer ${token}`),
        });
        return next(reqWithHeaders);
      }
      return next(req);
    })
  );
};
