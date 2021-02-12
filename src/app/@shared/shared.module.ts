import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {BackgroundImageDirective, ImageFallbackDirective} from './directives';
import {
  InfoComponent,
  MemberComponent,
  PlaceMediumCardComponent,
  TeamComponent,
  TopHeaderComponent
} from './components';

const Directives = [
  BackgroundImageDirective,
  ImageFallbackDirective
];

const Components = [
  TopHeaderComponent,
  TeamComponent,
  MemberComponent,
  InfoComponent,
  PlaceMediumCardComponent
];

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, ScrollingModule, ...Directives, ...Components],
  declarations: [
    ...Directives,
    ...Components
  ]
})
export class SharedModule {
}
