import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'employees/create',
    component: EmployeeCreateComponent,
    canActivate: [authGuard],
  },
  { path: 'hello', component: HelloComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
