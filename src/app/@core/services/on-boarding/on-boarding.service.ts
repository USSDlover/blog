import {Injectable} from '@angular/core';

@Injectable()
export class OnBoardingService {
  private storage = localStorage;

  getOnBoardingState(): boolean {
    if (this.storage.getItem('not_first_time')) {
      return false;
    } else {
      this.storage.setItem('not_first_time', 'TRUE');
      return true;
    }
  }
}
