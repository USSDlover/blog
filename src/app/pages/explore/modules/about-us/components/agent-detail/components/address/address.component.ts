import {Component, Input, OnInit} from '@angular/core';
import {IMember} from '../../../../../../../../@data/interfaces';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() agent: IMember;

  constructor() {
  }

  ngOnInit(): void {
  }

}
