import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-ngx-externaltoggle',
  templateUrl: './datepicker-ngx-externaltoggle.component.html',
  styleUrls: ['./datepicker-ngx-externaltoggle.component.css']
})
export class DatepickerNgxExternaltoggleComponent implements OnInit {
  disableInput:boolean;
  displayInput: string;
  disableDatepicker:boolean;
  displayDatepicker: string;

  constructor() {
    
   }

  ngOnInit() {
    this.disableInput=true;
    this.displayInput="none";
    this.disableDatepicker=false;
    this.displayDatepicker="block";
  }

 
  toggleDisabled(): void {
    if(
      this.disableInput==true
      &&this.displayInput=="none"
      &&this.disableDatepicker==false
      &&this.displayDatepicker=="block"
      ){
      this.disableInput=false;
      this.displayInput="block";
      this.disableDatepicker=true;
      this.displayDatepicker="none";      
    }else if (
      this.disableInput==false
      &&this.displayInput=="block"
      &&this.disableDatepicker==true
      &&this.displayDatepicker=="none"
      ){
      this.disableInput=true;
      this.displayInput="none";
      this.disableDatepicker=false;
      this.displayDatepicker="block";      
    }else{
      this.disableInput=true;
      this.displayInput="none";
      this.disableDatepicker=false;
      this.displayDatepicker="block";      
    }   
  }
}
