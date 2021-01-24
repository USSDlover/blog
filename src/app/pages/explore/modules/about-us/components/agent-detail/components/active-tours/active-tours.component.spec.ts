import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActiveToursComponent} from './active-tours.component';

describe('ActiveToursComponent', () => {
  let component: ActiveToursComponent;
  let fixture: ComponentFixture<ActiveToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveToursComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
