import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent, AgentDetailComponent, AgentsComponent} from './components';
import {AboutUsResolve, AgentResolve, AgentsResolve} from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    resolve: {
      info: AboutUsResolve
    }
  },
  {
    path: 'agents',
    component: AgentsComponent,
    resolve: {
      info: AgentsResolve
    }
  },
  {
    path: 'agent',
    component: AgentDetailComponent,
    resolve: {
      info: AgentResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule {
}

export const RoutedComponents = [
  AboutUsComponent,
  AgentsComponent,
  AgentDetailComponent
];
