import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPlaceDetail} from '@data/interfaces';
import {LoaderService} from '@core/services';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit, AfterContentInit {
  placeDetail: IPlaceDetail;
  backUrl: string;
  isRtl = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loader: LoaderService
  ) {
    if (route.snapshot?.data?.info) {
      this.placeDetail = route.snapshot.data.info;
    }
    if (router.getCurrentNavigation()?.extras?.state?.back_url) {
      this.backUrl = router.getCurrentNavigation().extras.state.back_url;
    }
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

}
