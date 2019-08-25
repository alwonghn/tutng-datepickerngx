import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNgxAdaptivepositionComponent } from './datepicker-ngx-adaptiveposition.component';

describe('DatepickerNgxAdaptivepositionComponent', () => {
  let component: DatepickerNgxAdaptivepositionComponent;
  let fixture: ComponentFixture<DatepickerNgxAdaptivepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerNgxAdaptivepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNgxAdaptivepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
