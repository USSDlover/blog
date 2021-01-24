import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {DataFacade} from '../../../../../@data/data.facade';
import {Injectable} from '@angular/core';

@Injectable()
export class AboutUsResolve implements Resolve<any> {
  constructor(private dataFacade: DataFacade) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const members = await this.dataFacade.getMembers().toPromise();
    const aboutUs = await this.dataFacade.getInfo('about-us').toPromise();

    return {
      members,
      aboutUs
    };
  }
}
