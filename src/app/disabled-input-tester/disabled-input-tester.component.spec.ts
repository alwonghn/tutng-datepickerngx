import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledInputTesterComponent } from './disabled-input-tester.component';

describe('DisabledInputTesterComponent', () => {
  let component: DisabledInputTesterComponent;
  let fixture: ComponentFixture<DisabledInputTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledInputTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledInputTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
