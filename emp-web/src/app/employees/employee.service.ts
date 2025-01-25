import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPLOYEES, Employee, CreateEmployee } from './models/employee.class';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root', // platform, any, null
})
export class EmployeeService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/employee`;

  public getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  addEmployee(newEmp: CreateEmployee) {
    return this.http.post<Employee>(this.baseUrl, newEmp);
  }
}
