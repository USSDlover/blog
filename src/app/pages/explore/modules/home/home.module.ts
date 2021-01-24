import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {HeaderComponent} from './components/home/header/header.component';
import {PlacesComponent} from './components/home/places/places.component';
import {HomeRoutingModule, RoutedComponents} from './home-routing.module';
import {HomeResolve} from './resolvers/home.resolve';

const Components = [
  HeaderComponent,
  PlacesComponent,
  ...RoutedComponents
];

const Providers = [
  HomeResolve
];

@NgModule({
  declarations: [...Components],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [
    ...Providers
  ]
})
export class HomeModule {
}
