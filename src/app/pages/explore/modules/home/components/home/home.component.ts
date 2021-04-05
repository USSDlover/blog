import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICategory, IPlace} from '@data/interfaces';
import {LoaderService} from '@core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  readonly homeData: {
    places: IPlace[],
    categories: ICategory[]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loader: LoaderService
  ) {
    this.homeData = route.snapshot.data.info;
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.loader.setLoading(false);
  }

  onCategorySelect(catId: string): void {
    this.router.navigate(
      ['/explore/search/result'],
      {
        queryParams: {
          catId
        }
      }
    ).finally();
  }
}
