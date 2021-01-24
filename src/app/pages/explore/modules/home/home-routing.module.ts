import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomeResolve} from './resolvers/home.resolve';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      info: HomeResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}

export const RoutedComponents = [
  HomeComponent
];
