import {Component, Input, OnInit} from '@angular/core';
import {IInfoBox} from '../../../@data/interfaces';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {
  @Input() infoBox: IInfoBox;
  @Input() isRtl = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
