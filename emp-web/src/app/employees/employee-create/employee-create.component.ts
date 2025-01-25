import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../employee.service';
import { CreateEmployee } from '../models/employee.class';

interface CreateEmployeeForm {
  name: FormControl<string>;
  age: FormControl<number>;
  salary: FormControl<number>;
  address: FormControl<string>;
  position: FormControl<string>;
}

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
  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  router: Router = inject(Router);
  employeeService: EmployeeService = inject(EmployeeService);
  snackBar: MatSnackBar = inject(MatSnackBar);
  emp = this.fb.group<CreateEmployeeForm>({
    name: this.fb.control('', [Validators.required, Validators.minLength(6)]),
    salary: this.fb.control(-1, [Validators.required, Validators.min(10000)]),
    age: this.fb.control(-1, [
      Validators.required,
      Validators.min(18),
      Validators.max(120),
    ]),
    position: this.fb.control('', Validators.required),
    address: this.fb.control('', Validators.required),
  });

  constructor() {}

  handleSubmit() {
    if (this.emp.invalid) {
      this.snackBar.open('You have errors in your form. Please check');
      return;
    }
    this.employeeService
      .addEmployee(this.emp.value as unknown as CreateEmployee)
      .subscribe(() => this.router.navigateByUrl('/employees'));
  }
}
