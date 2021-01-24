import {Component, OnInit} from '@angular/core';
import {IInfoBox, IMember} from '../../../../../../@data/interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  agents: IMember[];
  aboutAgents: IInfoBox;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (route.snapshot?.data?.info?.agents && route.snapshot?.data?.info?.aboutAgents) {
      this.agents = route.snapshot.data.info.agents;
      this.aboutAgents = route.snapshot.data.info.aboutAgents;
    }
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
  }

  onAgentClick(agentId: string): void {
    this.router.navigate(['explore/about/agent'], {
      queryParams: {
        id: agentId
      }
    });
  }

}
