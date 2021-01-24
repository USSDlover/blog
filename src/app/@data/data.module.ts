import {NgModule} from '@angular/core';
import {DataFacade} from './data.facade';
import {AgentsService, CategoriesService, InfoService, MembersService, PlacesService} from './services';

const Providers = [
  DataFacade,
  PlacesService,
  CategoriesService,
  AgentsService,
  MembersService,
  InfoService
];

@NgModule({
  providers: [...Providers]
})
export class DataModule {
}
