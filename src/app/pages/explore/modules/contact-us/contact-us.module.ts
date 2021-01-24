import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormComponent } from './components/contact-form/form.component';
import { ContactComponent } from './components/contact-info/contact.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path: '', component: ContactUsComponent}
];

const Components = [
  ContactUsComponent ,
  BannerComponent ,
  ContactComponent ,
  FormComponent
];

@NgModule({
  declarations: [...Components],
  imports: [
    SharedModule,
    FormsModule ,
    ReactiveFormsModule ,
    RouterModule.forChild(routes)
  ]
})
export class ContactUsModule {}
