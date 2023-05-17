import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[TextFormat]'
})
export class TextFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blue') onBlue() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLoverCase();
  }

}
