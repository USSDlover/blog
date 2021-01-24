import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultComponent, SearchComponent} from './components';
import {ResultResolve, SearchResolve} from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    resolve: {
      info: SearchResolve
    }
  },
  {
    path: 'result',
    component: ResultComponent,
    resolve: {
      info: ResultResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {
}

export const RoutedComponents = [
  SearchComponent,
  ResultComponent
];
