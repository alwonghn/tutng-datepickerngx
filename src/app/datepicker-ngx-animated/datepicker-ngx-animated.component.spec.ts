import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNgxAnimatedComponent } from './datepicker-ngx-animated.component';

describe('DatepickerNgxAnimatedComponent', () => {
  let component: DatepickerNgxAnimatedComponent;
  let fixture: ComponentFixture<DatepickerNgxAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerNgxAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNgxAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
