import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IMember} from '../../interfaces';

const MockMembers: IMember[] = [
  {
    id: 'user_01',
    profile: 'assets/images/pepole/hossein.png',
    fullName: 'حسین علیزاده',
    role: {
      id: 'manager',
      title: 'مدیر اجرایی'
    }
  },
  {
    id: 'user_02',
    profile: 'assets/images/pepole/mamad.png',
    fullName: 'محمد بحر',
    role: {
      id: 'boss',
      title: 'مدیر عامل'
    }
  },
  {
    id: 'user_03',
    profile: 'assets/images/pepole/heidar.png',
    fullName: 'حیدر صفری',
    role: {
      id: 'resource',
      title: 'منابع انسانی'
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
