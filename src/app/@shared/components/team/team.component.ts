import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMember} from '../../../@data/interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() teamMembers: IMember[];
  @Input() listTitle;
  @Input() isRtl = true;
  @Output() memberClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
