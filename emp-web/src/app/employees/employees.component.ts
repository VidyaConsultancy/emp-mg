import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-employees',
  imports: [RouterOutlet, SharedModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
