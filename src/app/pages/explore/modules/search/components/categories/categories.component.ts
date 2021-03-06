import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from '../../../../../../@data/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() categories: ICategory[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
