import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNgxInlineComponent } from './datepicker-ngx-inline.component';

describe('DatepickerNgxInlineComponent', () => {
  let component: DatepickerNgxInlineComponent;
  let fixture: ComponentFixture<DatepickerNgxInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerNgxInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNgxInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
