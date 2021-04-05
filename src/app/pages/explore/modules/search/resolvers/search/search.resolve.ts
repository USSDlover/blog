import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {DataFacade} from '@data/data.facade';
import {LoaderService} from '@core/services';

@Injectable()
export class SearchResolve implements Resolve<any> {
  constructor(
    private dataFacade: DataFacade,
    private loader: LoaderService
  ) {
    loader.setLoading(true);
  }

  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    return await this.dataFacade.getAllCategories().toPromise();
  }
}
