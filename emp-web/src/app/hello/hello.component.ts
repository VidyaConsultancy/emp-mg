import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  template: `<p>Hello World</p>`,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class HelloComponent {}
