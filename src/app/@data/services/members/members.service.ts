import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IMember} from '../../interfaces';

const MockMembers: IMember[] = [
  {
    id: 'user_01',
    profile: 'assets/images/pepole/hossein.png',
    fullName: 'طاهره پاسلار',
    role: {
      id: 'ceo',
      title: 'مدیرعامل'
    }
  },
  {
    id: 'user_02',
    profile: 'assets/images/pepole/mamad.png',
    fullName: 'محمد پاسلار',
    role: {
      id: 'cto',
      title: 'مدیرفنی بند ب'
    }
  },
  {
    id: 'user_03',
    profile: 'assets/images/pepole/heidar.png',
    fullName: 'صدیقه حق گو',
    role: {
      id: 'reseller',
      title: 'كارمند فروش'
    }
  },
  {
    id: 'user_04',
    profile: 'assets/images/pepole/heidar.png',
    fullName: 'افسانه شیردل',
    role: {
      id: 'cmm',
      title: 'مدیر صفحه اینستاگرام'
    }
  }
];

@Injectable()
export class MembersService {
  constructor() {
  }

  getMembers(): Observable<IMember[]> {
    return of(MockMembers);
  }
}
