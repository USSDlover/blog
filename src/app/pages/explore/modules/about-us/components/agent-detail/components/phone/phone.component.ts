import {Component, Input, OnInit} from '@angular/core';
import {IMember} from '../../../../../../../../@data/interfaces';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  @Input() agent: IMember;

  constructor() {
  }

  ngOnInit(): void {
  }

}
