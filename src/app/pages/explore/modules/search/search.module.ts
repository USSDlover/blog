import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RoutedComponents, SearchRoutingModule} from './search-routing.module';
import {
  AutoCompleteComponent,
  CategoriesComponent,
  CategoryComponent,
  HeaderComponent,
  PlaceComponent,
  SearchBarComponent
} from './components';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResultResolve, SearchResolve} from './resolvers';

const Components = [
  HeaderComponent,
  SearchBarComponent,
  AutoCompleteComponent,
  CategoriesComponent,
  CategoryComponent,
  PlaceComponent,
  ...RoutedComponents
];

const Providers = [
  SearchResolve,
  ResultResolve
];

@NgModule({
  declarations: [...Components],
  imports: [
    SharedModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [...Providers]
})
export class SearchModule {}
