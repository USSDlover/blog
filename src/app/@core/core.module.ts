import {AppConfig} from './config/app.config';
import {IAppConfig} from './config/app.config.model';
import {APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './import.guard';
import {HttpClientModule} from '@angular/common/http';
import {ApiService, ImgUrlParserService, LoaderService} from './services';

export function initializeApp(appConfig: AppConfig): () => Promise<IAppConfig> {
  return () => appConfig.load();
}

const Providers = [
  ApiService,
  ImgUrlParserService,
  LoaderService
];

@NgModule({
  imports: [HttpClientModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        AppConfig,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeApp,
          deps: [AppConfig], multi: true
        },
        ...Providers
      ]
    } as ModuleWithProviders<any>;
  }
}
