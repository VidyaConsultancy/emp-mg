import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../employee.service';
import { CreateEmployee } from '../models/employee.class';

@Component({
  selector: 'app-employee-create',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css',
})
export class EmployeeCreateComponent {
  fb: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);
  employeeService: EmployeeService = inject(EmployeeService);
  snackBar: MatSnackBar = inject(MatSnackBar);
  emp = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    salary: ['', Validators.required, Validators.min(10000)],
    age: ['', Validators.required, Validators.min(18), Validators.max(120)],
    position: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor() {}

  handleSubmit() {
    if (this.emp.invalid) {
      this.snackBar.open('You have errors in your form. Please check');
      return;
    }
    this.employeeService.addEmployee(
      this.emp.value as unknown as CreateEmployee
    );
    this.router.navigateByUrl('/employees');
  }
}
