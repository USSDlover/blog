import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlaceMediumCardComponent} from './place-medium-card.component';

describe('PlaceComponent', () => {
  let component: PlaceMediumCardComponent;
  let fixture: ComponentFixture<PlaceMediumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceMediumCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMediumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
