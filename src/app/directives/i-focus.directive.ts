import {Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appIFocus]'
})
export class IFocusDirective implements OnInit {

  @Input() appIFocus: string;

  constructor(private ref: ElementRef) {
  }

  ngOnInit(): void {
    if (this.appIFocus === 'focus') {
      this.ref.nativeElement.focus();
    }
  }

}
