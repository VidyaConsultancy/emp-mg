import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee, CreateEmployee } from './models/employee.class';
import { environment } from '../../environments/environment';

export interface QueryParams {
  limit: number;
  page: number;
}
@Injectable({
  providedIn: 'root', // platform, any, null
})
export class EmployeeService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/employee`;

  public getEmployees(query: QueryParams) {
    const queryParams = Object.entries(query)
      .map(([key, value]) => {
        return `${[key]}=${value}`;
      })
      .join('&');
    return this.http.get<{
      count: number;
      total: number;
      page: number;
      pageCount: number;
      data: Employee[];
    }>(`${this.baseUrl}?${queryParams}`);
  }

  addEmployee(newEmp: CreateEmployee) {
    return this.http.post<Employee>(this.baseUrl, newEmp);
  }

  deleteEmployee(empId: number) {
    return this.http.delete(`${this.baseUrl}/${empId}`);
  }

  getEmployee(empId: number) {
    return this.http.get<Employee>(`${this.baseUrl}/${empId}`);
  }
}
