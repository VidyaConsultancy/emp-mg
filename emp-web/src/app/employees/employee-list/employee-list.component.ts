import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

class Employee {
  public id: number;
  constructor(public name: string, public age: number, public salary: number) {
    this.id = Math.floor(Math.random() * 1000);
  }
}

@Component({
  selector: 'app-employee-list',
  imports: [NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  public title = 'employees';
  public employees = [
    new Employee('John Doe', 30, 50000),
    new Employee('Jane Doe', 28, 45000),
    new Employee('Jim Doe', 26, 40000),
  ];

  updateTitle(str: string) {
    console.log(str);
    this.title = 'updated employee title';
  }

  getRandomNumber() {
    return Math.random();
  }

  editEmployee(employeeId: number) {}

  deleteEmployee(employeeId: number) {}
}
