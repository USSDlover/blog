import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AgentsBtnComponent} from './agents-btn.component';

describe('AgentsBtnComponent', () => {
  let component: AgentsBtnComponent;
  let fixture: ComponentFixture<AgentsBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgentsBtnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
