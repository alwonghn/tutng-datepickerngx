import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNgxIsdisabledComponent } from './datepicker-ngx-isdisabled.component';

describe('DatepickerNgxIsdisabledComponent', () => {
  let component: DatepickerNgxIsdisabledComponent;
  let fixture: ComponentFixture<DatepickerNgxIsdisabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerNgxIsdisabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNgxIsdisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
