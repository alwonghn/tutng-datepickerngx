import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabled-input-tester',
  templateUrl: './disabled-input-tester.component.html',
  styleUrls: ['./disabled-input-tester.component.css']
})
export class DisabledInputTesterComponent implements OnInit {

  disableInput: string = "";
  displayInput: string = "none";

  constructor() { }

  ngOnInit() {
    this.disableInput="disabled";
    this.displayInput="none";
  }

  toggleDisabled(): void {
    if(this.disableInput=="disabled"&&this.displayInput=="none"){
      this.displayInput="block";
      this.disableInput="";
    }else if (this.disableInput==""&&this.displayInput=="block"){
      this.displayInput="none";
      this.disableInput="disabled";
    }else{
      this.displayInput="none";
      this.disableInput="disabled";
    }
  }

  // toggleDisabling(){
  //   if(this.display=="none"){
  //     this.display="block";
  //   }else{
  //     this.display="none";
  //   }
  // }
}
