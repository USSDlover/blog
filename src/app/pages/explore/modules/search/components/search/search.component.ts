import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICategory} from '../../../../../../@data/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  categories: ICategory[];

  constructor(
    private route: ActivatedRoute
  ) {
    if (route.snapshot.data.info) {
      this.categories = route.snapshot.data.info;
    }
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
