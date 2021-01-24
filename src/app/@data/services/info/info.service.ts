import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IInfoBox} from '../../interfaces';

const MockInfos: IInfoBox[] = [
  {
    id: 'about-us',
    title: 'درباره ما',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' +
      ' و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه' +
      ' و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی' +
      ' مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
  },
  {
    id: 'about-agents',
    title: 'نمایندگان ما',
    description: ' ما برای راحتی بیشتر شما، در هر شهر نمایندگانی را قرار\n' +
      ' دادیم تا به راحتی بتوانید به جاذبه‌ی دیدنی مورد علاقه‌ی\n' +
      ' خود در آن شهر سفر کنید و آنها در این امر راهنماییتان\n' +
      ':می‌کنند. در ادامه لیست این نمایندگان را می‌بینید',
  }
];

@Injectable()
export class InfoService {
  constructor() {
  }

  getInfo(infoId: string): Observable<IInfoBox> {
    const theInfo = MockInfos.find(info => info.id === infoId);
    return of(theInfo);
  }
}
