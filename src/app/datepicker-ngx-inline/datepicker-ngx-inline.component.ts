import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-ngx-inline',
  templateUrl: './datepicker-ngx-inline.component.html',
  styleUrls: ['./datepicker-ngx-inline.component.css']
})
export class DatepickerNgxInlineComponent implements OnInit {

  bsInlineValue = new Date();

  constructor() { }

  ngOnInit() {
  }

}
