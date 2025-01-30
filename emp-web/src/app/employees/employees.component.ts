import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../auth/auth.service';
import { AsyncPipe } from '@angular/common';
import { Navs } from '../shared/components/sidebar/sidebar.types';
import { UnlessDirective } from '../shared/directives/unless.directive';

@Component({
  selector: 'app-employees',
  imports: [RouterOutlet, SharedModule, AsyncPipe, UnlessDirective],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);
  public navs: Navs[] = [
    {
      label: 'Employee',
      icon: 'badge',
      childs: [
        {
          label: 'List',
          url: '/employees/list',
          icon: 'list',
        },
        {
          label: 'Create',
          url: '/employees/create',
          icon: 'person_add',
        },
      ],
    },
  ];

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  get username$() {
    return this.authService.getUserName();
  }
}
