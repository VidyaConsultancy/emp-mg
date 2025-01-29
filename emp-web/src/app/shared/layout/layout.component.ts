import { Component, input, output } from '@angular/core';
import { Navs } from '../components/sidebar/sidebar.types';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  username = input();
  navs = input<Navs[]>([]);
  handleLogout = output();

  onLogout() {
    this.handleLogout.emit();
  }
}
