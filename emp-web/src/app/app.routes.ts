import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [authGuard],
    canDeactivate: [authGuard],
  },
  { path: 'hello', component: HelloComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
