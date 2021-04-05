import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {DataFacade} from '@data/data.facade';
import {ICategory, IPlace} from '@data/interfaces';
import {LoaderService} from '@core/services';

@Injectable()
export class HomeResolve implements Resolve<any> {
  constructor(
    private dataFacade: DataFacade,
    private loader: LoaderService
  ) {
    loader.setLoading(true);
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const places: IPlace[] = await this.dataFacade.getTop5Places()
      .toPromise();
    const categories: ICategory[] = await this.dataFacade.getTop2Categories()
      .toPromise();

    return {
      places,
      categories
    };
  }
}
