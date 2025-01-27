import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { employeeRoutes } from './employees/employee.routes';

export const routes: Routes = [
  { path: 'employees', children: employeeRoutes },
  { path: 'hello', component: HelloComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
