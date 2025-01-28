import { Component, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  name = input();
  @Output() handleLogout = new EventEmitter();

  logout() {
    this.handleLogout.emit();
  }
}
