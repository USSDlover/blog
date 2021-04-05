import {AfterContentInit, Component, OnDestroy} from '@angular/core';
import {LoaderService} from '@core/services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-loader *ngIf="loading"></app-loader>
  `
})
export class AppComponent implements AfterContentInit, OnDestroy {
  private loaderSub: Subscription;
  loading: boolean;

  constructor(private loader: LoaderService) {
  }

  private static removePreLoader(): void {
    const preLoader = document.getElementById('preLoader');
    const body = document.getElementsByTagName('body')[0];
    if (preLoader) {
      body.removeChild(preLoader);
    }
  }

  ngAfterContentInit(): void {
    AppComponent.removePreLoader();
    this.loaderSub = this.loader
      .getLoading()
      .subscribe(state => this.loading = state);
  }

  ngOnDestroy(): void {
    if (this.loaderSub) {
      this.loaderSub.unsubscribe();
    }
  }
}
