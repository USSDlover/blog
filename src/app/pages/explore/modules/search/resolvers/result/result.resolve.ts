import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {DataFacade} from '../../../../../../@data/data.facade';

@Injectable()
export class ResultResolve implements Resolve<any> {
  constructor(
    private dataFacade: DataFacade,
    private router: Router
  ) {
  }

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    const terms = route.queryParams.terms;
    const catId = route.queryParams.catId;
    if (terms) {
      return {
        places: await this.dataFacade.searchForPlace(route.queryParams.terms).toPromise(),
        terms
      };
    } else if (catId) {
      return {
        places: await this.dataFacade.getPlacesByCatId(catId).toPromise(),
        category: await this.dataFacade.getCatById(catId).toPromise()
      };
    } else {
      this.router.navigateByUrl('explore/search');
    }
  }
}
