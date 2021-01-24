import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExplorePage} from './explore.page';
import {PlaceDetailComponent} from './components/place-detail/place-detail.component';
import {PlaceDetailResolve} from './resolvers/place/place.detail.resolve';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module')
            .then(m => m.HomeModule)
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./modules/search/search.module')
            .then(m => m.SearchModule)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about-us/about-us.module')
            .then(m => m.AboutUsModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact-us/contact-us.module')
            .then(m => m.ContactUsModule)
      },
      {
        path: 'place',
        component: PlaceDetailComponent,
        resolve: {
          info: PlaceDetailResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingPageModule {
}
