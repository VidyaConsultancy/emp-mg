import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  name = input();
  handleLogout = output();

  logout() {
    this.handleLogout.emit();
  }
}
