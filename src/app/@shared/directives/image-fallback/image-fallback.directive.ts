import {Directive, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appDefault]'
})
export class ImageFallbackDirective implements OnInit, OnDestroy {
  @HostBinding('error') onError = this.updateUrl();

  @Input() default: string;
  @Input() gotError: EventEmitter<void> = new EventEmitter<void>();

  private _errorSub: Subscription;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this._errorSub = this.gotError.subscribe(() => {
      this.updateUrl();
    });
  }

  updateUrl(): void {
    this.el.nativeElement.src = this.default;
  }

  ngOnDestroy(): void {
    if (this._errorSub) {
      this._errorSub.unsubscribe();
    }
  }
}
