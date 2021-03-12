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
      .pipe(map((callResponse) => {
        if (callResponse.status) {
          return callResponse.response.map(cat =>
            this.imgUrl.parseImageUrl<ICategory>(cat, 'imageUrl'))
            .slice(0, 2);
        } else {
          return [];
        }
      }));
  }

  getAllCategories(): Observable<ICategory[]> {
    return this.api.makeGetApiCall<ICategory[]>('category')
      .pipe(map((callResponse) => {
        if (callResponse.status) {
          return callResponse.response.map(cat =>
            this.imgUrl.parseImageUrl<ICategory>(cat, 'imageUrl'));
        } else {
          return [];
        }
      }));
  }

  getCategoryById(catId): Observable<ICategory> {
    const params = new HttpParams().append('id', catId);

    return this.api.makeGetApiCall<ICategory>('category/detail', params)
      .pipe(map((callResponse) => {
        if (callResponse.status) {
          return this.imgUrl.parseImageUrl<ICategory>(callResponse.response, 'imageUrl');
        }
      }));
  }
}
