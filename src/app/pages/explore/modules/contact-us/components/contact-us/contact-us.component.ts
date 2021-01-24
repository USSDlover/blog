import {Component} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
