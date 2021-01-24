import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from '../../../../../../../@data/interfaces';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() categories: ICategory[];

  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();
}
