import { Component, Input, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  @Input('name') username!: string;
  @Output() handleLogout = new EventEmitter();

  onLogout() {
    this.handleLogout.emit();
  }
}
