import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'create',
    component: EmployeeCreateComponent,
    canActivate: [authGuard],
  },
  {
    path: ':empId',
    component: EmployeeDetailComponent,
  },
];

export default employeeRoutes;
