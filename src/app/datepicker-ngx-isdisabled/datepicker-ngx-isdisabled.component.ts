import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-ngx-isdisabled',
  templateUrl: './datepicker-ngx-isdisabled.component.html',
  styleUrls: ['./datepicker-ngx-isdisabled.component.css']
})
export class DatepickerNgxIsdisabledComponent {

  isDisabled = false;
 
  toggleDisabling(): void {
    this.isDisabled = !this.isDisabled;
  }

}
