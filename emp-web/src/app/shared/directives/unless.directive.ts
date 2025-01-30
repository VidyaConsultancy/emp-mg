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
})
export class UnlessDirective implements OnInit {
  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);

  appUnless = input<boolean>();

  ngOnInit(): void {
    if (this.appUnless()) {
      this.clearTemplate();
    } else {
      this.addTemplate();
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
