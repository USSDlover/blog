import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'explore',
    loadChildren: () =>
      import('./pages/explore/explore.page.module')
        .then(m => m.ExplorePageModule)
  },
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
