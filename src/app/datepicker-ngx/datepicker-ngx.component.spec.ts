import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNgxComponent } from './datepicker-ngx.component';

describe('DatepickerNgxComponent', () => {
  let component: DatepickerNgxComponent;
  let fixture: ComponentFixture<DatepickerNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerNgxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
