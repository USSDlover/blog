import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {AboutUsRoutingModule, RoutedComponents} from './about-us-routing.module';
import {
  ActiveToursComponent,
  AddressComponent,
  AgentInfoComponent,
  AgentsBtnComponent,
  PhoneComponent
} from './components';
import {AboutUsResolve, AgentResolve, AgentsResolve} from './resolvers';


const Components = [
  AgentsBtnComponent,
  ...RoutedComponents,
  AgentInfoComponent,
  ActiveToursComponent,
  PhoneComponent,
  AddressComponent
];

const Providers = [
  AgentsResolve,
  AgentResolve,
  AboutUsResolve
];

@NgModule({
  declarations: [...Components],
  imports: [
    SharedModule,
    AboutUsRoutingModule
  ],
  providers: [...Providers]
})
export class AboutUsModule {
}
