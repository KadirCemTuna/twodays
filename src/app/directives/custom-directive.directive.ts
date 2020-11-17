import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorsDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  @Input() appColorsDirective: string;

  constructor(private ref: ElementRef ) { }

  ngOnInit(): void {
    this.ref.nativeElement.style.backgroundColor = this.appColorsDirective;
  }

}
