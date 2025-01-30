import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileSizePipe } from './shared/pipes/file-size.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FileSizePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
