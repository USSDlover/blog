import {AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit(): void {
  }
}
