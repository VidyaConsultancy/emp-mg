import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  imports: [HelloComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Helo, world!';
}
