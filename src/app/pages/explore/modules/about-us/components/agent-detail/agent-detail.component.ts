import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IMember} from '../../../../../../@data/interfaces';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.scss']
})
export class AgentDetailComponent implements OnInit {
  agentData: IMember;
  isRtl = true;

  constructor(
    private route: ActivatedRoute
  ) {
    if (route.snapshot?.data?.info) {
      this.agentData = route.snapshot.data.info;
    }
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
  }

}
