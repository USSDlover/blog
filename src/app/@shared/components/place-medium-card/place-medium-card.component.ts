import {Component, Input, OnInit} from '@angular/core';
import {IPlace} from '../../../@data/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-place-medium-card',
  templateUrl: './place-medium-card.component.html',
  styleUrls: ['./place-medium-card.component.scss']
})
export class PlaceMediumCardComponent implements OnInit {
  @Input() place: IPlace;
  @Input() backUrl: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onPlaceClick(): void {
    this.router.navigate(
      ['explore/place'],
      {
        queryParams: {
          id: this.place.id
        },
        state: {
          back_url: this.backUrl
        }
      }
    ).finally();
  }

}
