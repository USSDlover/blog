import {Component, Input} from '@angular/core';
import {IPlace} from '../../../../../../../@data/interfaces';

@Component({
  selector: 'app-places-slide',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
  @Input() places: IPlace[];
}
