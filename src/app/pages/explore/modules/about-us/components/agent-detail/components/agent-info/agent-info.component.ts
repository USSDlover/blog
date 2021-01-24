import {Component, Input, OnInit} from '@angular/core';
import {IMember} from '../../../../../../../../@data/interfaces';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.scss']
})
export class AgentInfoComponent implements OnInit {
  @Input() agent: IMember;

  constructor() {
  }

  ngOnInit(): void {
  }

}
