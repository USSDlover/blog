import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appIsElementInViewPort]'
})
export class ElementGetIntoViewPortDirective implements OnInit {
  @Input() isLastChild: boolean;
  @Input() Scroll: EventEmitter<any>;
  @Input() ElementIndex: number;
  @Input() ScrollDirection: 'vertical' | 'horizontal';

  @Output() elementIsFullyVisible: EventEmitter<number> = new EventEmitter<number>(true);
  @Output() isLastChildFullyVisible: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  private host: HTMLDivElement;

  constructor(private el: ElementRef) {
  }

  /* for horizontal scroll */
  private static isHorizontalScrolledIntoView(el): boolean {
    const rect = el.getBoundingClientRect();
    const elemLeft = rect.left;
    const elemRight = rect.right;

    // Only completely visible elements return true:
    // const isVisible = (elemLeft >= 0) && (elemRight <= window.innerWidth);
    return (elemLeft >= 0) && (elemRight <= window.innerWidth + 5);
    // Partially visible elements return true:
    // const isVisible = elemLeft < window.innerWidth && elemRight >= 0;
    // return (elemLeft < window.innerWidth) && (elemRight >= 0);
  }

  /* for vertical scroll */
  private static isVerticalScrolledIntoView(el): boolean {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    // const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
  }

  ngOnInit(): void {
    this.host = this.el.nativeElement;
    switch (this.ScrollDirection) {
      case 'vertical':
        this.verticalScrollEvents();
        break;
      case 'horizontal':
        this.horizontalScrollEvents();
        break;
    }
  }

  private horizontalScrollEvents(): void {
    if (this.Scroll && this.isLastChild) {
      this.Scroll.subscribe(() => {
        if (this.isLastChild && ElementGetIntoViewPortDirective.isHorizontalScrolledIntoView(this.host)) {
          this.isLastChildFullyVisible.emit(true);
          this.isLastChild = false;
        }
      });
    } else if (this.Scroll && (this.ElementIndex >= 0)) {
      this.Scroll.subscribe(() => {
        if (ElementGetIntoViewPortDirective.isHorizontalScrolledIntoView(this.host)) {
          this.elementIsFullyVisible.emit(this.ElementIndex);
        }
      });
    }
  }

  private verticalScrollEvents(): void {
    if (this.Scroll && this.isLastChild) {
      this.Scroll.subscribe(() => {
        if (ElementGetIntoViewPortDirective.isVerticalScrolledIntoView(this.host) && this.isLastChild) {
          this.isLastChildFullyVisible.emit(true);
          this.isLastChild = false;
        }
      });
    } else if (this.Scroll && this.ElementIndex) {
      this.Scroll.subscribe(() => {
        if (ElementGetIntoViewPortDirective.isVerticalScrolledIntoView(this.host)) {
          this.elementIsFullyVisible.emit(this.ElementIndex);
        }
      });
    }
  }

}
