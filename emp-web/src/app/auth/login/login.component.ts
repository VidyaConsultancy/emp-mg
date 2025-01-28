import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from '../models/auth';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthService = inject(AuthService);
  private readonly snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly router: Router = inject(Router);

  hide = signal(true);

  form = this.fb.group({
    username: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
  });

  togglePasswordFieldVisibility(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.hide.set(!this.hide());
  }

  handleLogin() {
    if (this.form.invalid) {
      this.snackBar.open(`Invalid form, please verify`);
    }
    this.authService
      .login(this.form.value as unknown as Auth)
      .subscribe((res) => {
        localStorage.setItem('accessToken', res.token);
        localStorage.setItem('me', JSON.stringify(res.user));
        this.router.navigateByUrl('/employees');
      });
  }
}
