import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNgxExternaltoggleComponent } from './datepicker-ngx-externaltoggle.component';

describe('DatepickerNgxExternaltoggleComponent', () => {
  let component: DatepickerNgxExternaltoggleComponent;
  let fixture: ComponentFixture<DatepickerNgxExternaltoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerNgxExternaltoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNgxExternaltoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
