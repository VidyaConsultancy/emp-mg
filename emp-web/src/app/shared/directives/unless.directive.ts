import {
  Directive,
  inject,
  TemplateRef,
  ViewContainerRef,
  input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: false,
})
export class UnlessDirective implements OnInit {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);

  condition = input<boolean>();

  ngOnInit(): void {
    if (this.condition()) {
      this.addTemplate();
    } else {
      this.clearTemplate();
    }
  }

  addTemplate() {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  clearTemplate() {
    this.viewContainerRef.clear();
  }
}
