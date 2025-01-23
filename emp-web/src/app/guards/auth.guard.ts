import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log('accessToken', accessToken);
  if (accessToken) {
    return true;
  }
  return false;
};
