import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {ExplorePage} from './explore.page';
import {ExploreRoutingPageModule} from './explore-routing.page.module';
import {BottomToolbarComponent} from './components';
import {DataModule} from '@data/data.module';
import {PlaceDetailComponent} from './components/place-detail/place-detail.component';
import {PlaceDetailResolve} from './resolvers/place/place.detail.resolve';

const Components = [
  ExplorePage,
  BottomToolbarComponent,
  PlaceDetailComponent
];

const Providers = [
  PlaceDetailResolve
];

@NgModule({
  declarations: [...Components],
  imports: [
    SharedModule,
    ExploreRoutingPageModule,
    DataModule
  ],
  exports: [],
  providers: [
    ...Providers
  ]
})
export class ExplorePageModule {}
