import {AfterContentInit, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICategory} from '@data/interfaces';
import {LoaderService} from '@core/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterContentInit {
  categories: ICategory[];

  constructor(
    private route: ActivatedRoute,
    private loader: LoaderService
  ) {
    if (route.snapshot.data.info) {
      this.categories = route.snapshot.data.info;
    }
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngAfterContentInit(): void {
    this.loader.setLoading(false);
  }
}
