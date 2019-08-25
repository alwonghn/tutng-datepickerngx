import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-ngx-externaltoggle',
  templateUrl: './datepicker-ngx-externaltoggle.component.html',
  styleUrls: ['./datepicker-ngx-externaltoggle.component.css']
})
export class DatepickerNgxExternaltoggleComponent implements OnInit {
  displayInput: string;
  disableInput: string;
  displayDatepicker: string;
  disableDatepicker: string;  

  constructor() {
    
   }

  ngOnInit() {
    this.displayInput="none";
    this.disableInput="disabled";
    this.displayDatepicker="block";
    this.disableDatepicker="";    
  }

 
  toggleDisabled(): void {
    if(
      this.displayInput=="none"      
      &&this.disableInput=="disabled"      
      &&this.displayDatepicker=="block"
      &&this.disableDatepicker==""
      ){
      this.displayDatepicker="none";
      this.disableDatepicker="disabled"; 
      this.displayInput="block";
      this.disableInput="";
           
    }else if (
      this.displayInput=="block"
      &&this.disableInput==""
      &&this.displayDatepicker=="none"
      &&this.disableDatepicker=="disabled"     
      ){
      this.displayInput="none";
      this.disableInput="disabled";
      this.displayDatepicker="block";
      this.disableDatepicker="";            
    }else{
      this.displayInput="none";
      this.disableInput="disabled";
      this.displayDatepicker="block";
      this.disableDatepicker="";            
    }   
  }
}
