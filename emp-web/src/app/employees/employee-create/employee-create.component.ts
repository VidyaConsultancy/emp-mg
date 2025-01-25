import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css',
})
export class EmployeeCreateComponent {
  fb: FormBuilder = inject(FormBuilder);
  name = this.fb.control('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
  ]);
  emp = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    salary: ['', Validators.required],
    age: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
    }),
  });
  // emp = new FormGroup({
  //   name: new FormControl(),
  //   salary: new FormControl(),
  //   age: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     pincode: new FormControl(),
  //   }),
  // });

  constructor() {
    console.log(this.name);
    this.name.valueChanges.subscribe((value) => console.log(value));
    this.emp.valueChanges.subscribe((value) => console.log(value));
  }

  handleSubmit() {
    if (this.emp.invalid) {
      return;
    }
    console.log(this.emp.value);
  }
}
