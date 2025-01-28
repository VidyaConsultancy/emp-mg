import { Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees.component';

export const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./employee-list/employee-list.component').then(
        (c) => c.EmployeeListComponent
      ),
  },
  {
    path: 'create',
    component: EmployeeCreateComponent,
  },
  {
    path: ':empId',
    component: EmployeeDetailComponent,
  },
];

export default employeeRoutes;
