import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';
import { Employee } from '../models/employee.class';
import { EmployeeService } from '../employee.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    RouterLink,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public title = 'employees';
  public employees!: Observable<Employee[]>;
  public displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'address',
    'salary',
    'position',
    'actions',
  ];
  private router: Router;
  private employeeService: EmployeeService;
  sub!: Subscription;

  constructor() {
    this.router = inject(Router);
    this.employeeService = inject(EmployeeService);
  }

  ngOnInit(): void {
    // gets called after constructor and ngOnChanges.
    // only once per life cycle of the component.
    // this.sub = this.employeeService.getEmployees().subscribe((value) => {
    //   // this.employees = value;
    // });
    this.employees = this.employeeService.getEmployees();
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    // gets called right before the component is being destroyed.
    // only once per life cycle of the component.
  }

  getRandomNumber() {
    return Math.random();
  }

  editEmployee(employeeId: number) {}

  deleteEmployee(employeeId: number) {}

  navigateToCreate() {
    this.router.navigate(['/employees/create']);
  }
}
