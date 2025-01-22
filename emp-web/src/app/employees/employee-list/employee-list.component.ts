import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Employee, EMPLOYEES } from '../models/employee.class';

@Component({
  selector: 'app-employee-list',
  imports: [MatTableModule, CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public title = 'employees';
  public employees: Employee[] = [...EMPLOYEES];
  public displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'address',
    'salary',
    'position',
  ];

  constructor() {}

  ngOnInit(): void {
    // gets called after constructor and ngOnChanges.
    // only once per life cycle of the component.
  }

  ngOnDestroy(): void {
    // gets called right before the component is being destroyed.
    // only once per life cycle of the component.
  }

  getRandomNumber() {
    return Math.random();
  }

  editEmployee(employeeId: number) {}

  deleteEmployee(employeeId: number) {}
}
