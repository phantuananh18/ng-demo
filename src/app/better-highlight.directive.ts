import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseenter(dataEvent: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );

    // this.backgroundColor = 'yellow';

    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(dataEvent: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );

    // this.backgroundColor = 'transparent';

    this.backgroundColor = this.defaultColor;
  }
}
