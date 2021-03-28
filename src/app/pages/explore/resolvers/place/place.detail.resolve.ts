import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {IPlaceDetail} from '@data/interfaces';
import {Injectable} from '@angular/core';
import {DataFacade} from '@data/data.facade';

@Injectable()
export class PlaceDetailResolve implements Resolve<IPlaceDetail> {
  constructor(
    private dataFacade: DataFacade,
    private router: Router
  ) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IPlaceDetail> {
    const placeId = route.queryParams.id;
    console.log(placeId);
    let place: IPlaceDetail;
    if (placeId) {
      place = await this.dataFacade.getPlaceById(placeId).toPromise();
      if (place) {
        return place;
      } else {
        console.log('No valid place id');
        this.router.navigateByUrl('explore/home').finally();
      }
    } else {
      console.log('No valid place id');
      this.router.navigateByUrl('explore/home').finally();
    }
  }
}
