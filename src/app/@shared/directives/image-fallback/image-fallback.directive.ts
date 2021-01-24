import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive({
    selector: 'img[default]',
    host: {'(error)': 'updateUrl()'}
})
export class ImageFallbackDirective implements OnInit, OnDestroy {
    @Input() default: string;
    @Input() gotError: EventEmitter<void> = new EventEmitter<void>();

    private _errorSub: Subscription;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this._errorSub = this.gotError.subscribe(() => {
            this.updateUrl();
        });
    }

    updateUrl() {
        this.el.nativeElement.src = this.default;
    }

    ngOnDestroy() {
        if (this._errorSub) {
            this._errorSub.unsubscribe();
        }
    }
}
