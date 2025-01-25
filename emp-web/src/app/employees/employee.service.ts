import { Injectable } from '@angular/core';
import { EMPLOYEES, Employee, CreateEmployee } from './models/employee.class';

@Injectable({
  providedIn: 'root', // platform, any, null
})
export class EmployeeService {
  private employees: Employee[] = EMPLOYEES;

  constructor() {
    console.log(`EmployeeService`);
  }

  public getEmployees() {
    return this.employees;
  }

  addEmployee(newEmp: CreateEmployee) {
    this.employees.push({
      ...newEmp,
      id: this.employees.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
