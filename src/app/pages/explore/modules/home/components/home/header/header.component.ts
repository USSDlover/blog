import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from '@data/interfaces';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() categories: ICategory[];
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  headerTitle = `
      تجربه ی واقعی سفر با ناخدا
      صدور بلیت های داخلی و خارجی
      اخذ ویزای تمامی کشورها
      برگزاری انواع تورهای داخلی و خارجی
      شماره تماس 07633683379
  `;
}
