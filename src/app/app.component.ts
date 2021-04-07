import {AfterContentInit, Component, OnDestroy} from '@angular/core';
import {LoaderService, OnBoardingService} from '@core/services';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-loader *ngIf="loading"></app-loader>
    <app-on-boarding
      *ngIf="displayOnBoarding"
      (boardingIsDone)="displayOnBoarding = false">
    </app-on-boarding>
  `
})
export class AppComponent implements AfterContentInit, OnDestroy {
  private loaderSub: Subscription;
  loading: boolean;
  displayOnBoarding: boolean;

  constructor(
    private loader: LoaderService,
    private onBoarding: OnBoardingService
  ) {
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
    this.shouldDisplayOnBoarding();
    if (!this.loaderSub) {
      this.subscribeToLoaderChange();
    }
  }

  private subscribeToLoaderChange(): void {
    this.loaderSub = this.loader
      .getLoading()
      .subscribe(state => this.loading = state);
  }

  private shouldDisplayOnBoarding(): void {
    this.displayOnBoarding = this.onBoarding.getOnBoardingState();
  }

  ngOnDestroy(): void {
    if (this.loaderSub) {
      this.loaderSub.unsubscribe();
    }
  }
}
