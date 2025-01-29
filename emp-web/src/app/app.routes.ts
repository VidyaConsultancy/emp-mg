import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employee.routes').then((c) => c.employeeRoutes),
    canActivateChild: [authGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((c) => c.authRoutes),
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
