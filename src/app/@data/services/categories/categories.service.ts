import {Injectable} from '@angular/core';
import {ICategory} from '../../interfaces';
import {Observable} from 'rxjs';
import {ApiService, ImgUrlParserService} from '../../../@core/services';
import {map} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class CategoriesService {
  constructor(
    private api: ApiService,
    private imgUrl: ImgUrlParserService
  ) {
  }

  getTop2Categories(): Observable<ICategory[]> {
    return this.api.makeGetApiCall<ICategory[]>('category')
      .pipe(map(categories => {
        return categories.map(cat =>
          this.imgUrl.parseImageUrl<ICategory>(cat, 'image_url'))
          .slice(0, 2);
      }));
  }

  getAllCategories(): Observable<ICategory[]> {
    return this.api.makeGetApiCall<ICategory[]>('category')
      .pipe(map(categories => {
        return categories.map(cat =>
          this.imgUrl.parseImageUrl<ICategory>(cat, 'image_url'));
      }));
  }

  getCategoryById(catId): Observable<ICategory> {
    const params = new HttpParams().append('id', catId);

    return this.api.makeGetApiCall<ICategory>('category/detail', params)
      .pipe(map(cat => {
        return this.imgUrl.parseImageUrl<ICategory>(cat, 'image_url');
      }));
  }
}
