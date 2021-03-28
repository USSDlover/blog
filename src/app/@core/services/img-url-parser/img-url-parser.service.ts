import {Injectable} from '@angular/core';
import {AppConfig} from '@core/config/app.config';

@Injectable()
export class ImgUrlParserService {
  protected apiServer = AppConfig.settings.apiServer.base + AppConfig.settings.apiServer.meta;

  constructor() {
  }

  addApiToImageUrl(imageName: string): string {
    return this.apiServer + imageName;
  }

  parseImageUrl<T>(obj: T, property: string, optionalPath?: string): T {
    if (optionalPath) {
      obj[`${property}`] = this.apiServer + optionalPath + obj[`${property}`];
    } else {
      obj[`${property}`] = this.apiServer + obj[`${property}`];
    }
    return obj;
  }

}
