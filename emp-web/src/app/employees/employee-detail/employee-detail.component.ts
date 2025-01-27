import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
})
export class EmployeeDetailComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly employeeService: EmployeeService = inject(EmployeeService);
  public employeeDetail$!: Observable<Employee>;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getEmployeeDetails(parseInt(params['empId']));
    });
  }

  getEmployeeDetails(empId: number) {
    this.employeeDetail$ = this.employeeService.getEmployee(empId);
  }
}
