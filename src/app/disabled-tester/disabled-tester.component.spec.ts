import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledTesterComponent } from './disabled-tester.component';

describe('DisabledTesterComponent', () => {
  let component: DisabledTesterComponent;
  let fixture: ComponentFixture<DisabledTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
