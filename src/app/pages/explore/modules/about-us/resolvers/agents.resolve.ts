import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {DataFacade} from '../../../../../@data/data.facade';

@Injectable()
export class AgentsResolve implements Resolve<any> {
  constructor(private dataFacade: DataFacade) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const agents = await this.dataFacade.getAgents().toPromise();
    const aboutAgents = await this.dataFacade.getInfo('about-agents').toPromise();
    return {
      agents,
      aboutAgents
    };
  }
}
