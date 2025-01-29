import { Component, input } from '@angular/core';
import { Navs } from './sidebar.types';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  navs = input<Navs[]>([]);
}
