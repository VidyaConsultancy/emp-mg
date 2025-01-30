import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class HighlightDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('mouseenter')
  onMousemove() {
    this.eleRef.nativeElement.style.color = 'purple';
  }

  @HostListener('mouseout')
  onMouseout() {
    this.eleRef.nativeElement.style.color = 'red';
  }
}
