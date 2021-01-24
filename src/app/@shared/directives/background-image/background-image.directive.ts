import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundImageDirective implements OnInit, OnChanges {
  @Input() backgroundImageUrl: string;
  @Input() backgroundColour: string;
  @Input() backgroundSize: 'contain' | 'cover' | 'auto';

  defaultBackground = './assets/images/favorite/fall-back.png';

  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.updateUrl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.backgroundImageUrl) {
      this.updateUrl();
    }
  }

  private updateUrl(): void {
    const ntElement: HTMLDivElement = this.el.nativeElement;

    ntElement.style.background = `no-repeat center center url(${this.backgroundImageUrl})`;
    ntElement.style.backgroundSize = this.backgroundSize ?? 'auto';
    ntElement.style.backgroundColor = `${this.backgroundColour ? this.backgroundColour : 'transparent'}`;

    // this.checkIfUrlIsOkay(ntElement);
  }

  /*private checkIfUrlIsOkay(ntElement: HTMLDivElement): void {
    let imgElement: HTMLImageElement = document.createElement('img');

    imgElement.src = this.backgroundImageUrl;
    imgElement.onerror = () => {
      ntElement.style.background = `no-repeat center center url(${this.defaultBackground})`;
      ntElement.style.backgroundSize = 'auto 100%';
    };

    imgElement = undefined;
  }*/
}
