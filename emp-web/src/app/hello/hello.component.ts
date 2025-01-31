import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  template: `
    <form>
      <div>
        <label>Upload file</label>
        <input type="file" name="file" (change)="handleChange($event.target)" />
      </div>
      <button>Submit</button>
    </form>
  `,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class HelloComponent {
  fileToUpload!: File | null;
  handleChange(target: any) {
    console.log(target.files);
    this.fileToUpload = target.files[0];
    const formData = new FormData();
    formData.append('fileKey', target.files[0]);
    formData.append('extraField', 'extravalue');
  }
}
