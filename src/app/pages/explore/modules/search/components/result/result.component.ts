import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ICategory, IPlace} from '@data/interfaces';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '@core/services';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, AfterContentInit {
  isRtl = true;
  info: {
    places: IPlace[];
    category?: ICategory;
    terms?: string;
  };
  backUrl: string;

  constructor(
    private route: ActivatedRoute,
    private loader: LoaderService
  ) {
    if (this.route.snapshot.data.info) {
      this.info = this.route.snapshot.data.info;
      if (this.info.terms) {
        this.backUrl = 'explore/search/result?terms=' + this.info.terms;
      } else if (this.info.category) {
        this.backUrl = 'explore/search/result?catId=' + this.info.category.id;
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.loader.setLoading(false);
  }

}
