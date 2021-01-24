import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {DataFacade} from '../../../../../@data/data.facade';
import {Injectable} from '@angular/core';

@Injectable()
export class AgentResolve implements Resolve<any> {
  constructor(
    private dataFacade: DataFacade,
    private router: Router
  ) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const agentId = route.queryParams.id;
    if (agentId) {
      const theAgent = await this.dataFacade.getAgentById(agentId).toPromise();
      if (theAgent) {
        return theAgent;
      } else {
        this.router.navigateByUrl('explore/about/agents');
      }
    } else {
      this.router.navigateByUrl('explore/about/agents');
    }
  }
}
