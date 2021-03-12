import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IPlace, IPlaceDetail} from '../../interfaces';
import {ApiService, ImgUrlParserService} from '../../../@core/services';
import {map} from 'rxjs/operators';
import {HttpParams} from '@angular/common/http';

const Places: IPlaceDetail[] = [
  {
    _id: 'place_1',
    title: 'برج آزادی',
    imageUrl: 'assets/images/places/azadi.png',
    images: [
      'assets/images/places/azadi.png',
      'assets/images/places/azadi.png',
      'assets/images/places/azadi.png',
    ],
    imageModified: new Date().getTime(),
    location: {
      city: 'city',
      state: 'state'
    },
    catId: '1',
    address: ' برج آزادی در میدان آزادی تهران قرار دارد. میدان آزادی از غرب به\n' +
      ' بزرگراه شهید لشگری، از شرق به خیابان آزادی، از جنوب به بزرگراه\n' +
      '.سعیدی و از شمال به بزرگراه جناح محدود شده است',
    description: 'لورم ایپسوم متن ساختگی با ت' +
      'ولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و' +
      ' متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی' +
      ' تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باش' +
      'د، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و م' +
      'تخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای' +
      ' علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این ' +
      'صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط' +
      ' سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، ' +
      'و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
  },
];

@Injectable()
export class PlacesService {
  constructor(
    private api: ApiService,
    private imgUrl: ImgUrlParserService
  ) {
  }

  getTop5Places(): Observable<IPlace[]> {
    return this.api.makeGetApiCall<IPlace[]>('article')
      .pipe(
        map((callResponse) => {
          if (callResponse.status) {
            return callResponse.response.map(
              place => this.imgUrl.parseImageUrl<IPlace>(place, 'imageUrl'));
          } else {
            return Places;
          }
        }
      ));
  }

  getPlaceById(placeId: string): Observable<IPlaceDetail> {
    const params = new HttpParams().append('id', placeId);

    return this.api.makeGetApiCall<IPlaceDetail>('article/detail', params)
      .pipe(map((callResponse) => {
        if (callResponse.status) {
          callResponse.response.images = callResponse.response.images.map(imgItm => this.imgUrl.addApiToImageUrl(imgItm));
          return this.imgUrl.parseImageUrl<IPlaceDetail>(callResponse.response, 'imageUrl');
        } else {
          return Places[0];
        }
      }));
  }

  searchForPlace(terms: string): Observable<IPlace[]> {
    const regExp = new RegExp(terms, 'i');

    const foundPlaces: IPlace[] = Places.filter(place => {
      if (place.title.search(regExp) >= 0) {
        return place;
      }
    });

    return of(foundPlaces);
  }

  getPlacesByCatId(catId: string): Observable<IPlace[]> {
    const params = new HttpParams().append('catId', catId);

    return this.api.makeGetApiCall<IPlace[]>('article/filter', params)
      .pipe(map((callResponse) => {
        if (callResponse.status) {
          callResponse.response.forEach(place => this.imgUrl.parseImageUrl<IPlace>(place, 'imageUrl'));
          return callResponse.response;
        } else {
          return Places;
        }
      }));
  }
}
