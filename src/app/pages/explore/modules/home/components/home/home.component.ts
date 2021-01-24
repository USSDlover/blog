import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICategory, IPlace} from '@data/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly homeData: {
    places: IPlace[],
    categories: ICategory[]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.homeData = route.snapshot.data.info;
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {

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
