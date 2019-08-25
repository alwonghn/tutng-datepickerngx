import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleTesterComponent } from './ngstyle-tester.component';

describe('NgstyleTesterComponent', () => {
  let component: NgstyleTesterComponent;
  let fixture: ComponentFixture<NgstyleTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyleTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyleTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
