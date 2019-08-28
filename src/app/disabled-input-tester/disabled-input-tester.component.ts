import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabled-input-tester',
  templateUrl: './disabled-input-tester.component.html',
  styleUrls: ['./disabled-input-tester.component.css']
})
export class DisabledInputTesterComponent implements OnInit {

  // angular form options
  disableInput: string;
  displayInput: string;

  constructor() { }

  ngOnInit() {
    //angular form options
    this.disableInput="true";
    this.displayInput="none";
  }


  //angular form options
  toggleDisabled(): void {
    if(this.disableInput=="true"&&this.displayInput=="none"){
      this.displayInput="block";
      // this.disableInput="false";
      // this.disableInput="null";
      this.disableInput=null;
    }else if (this.disableInput=="false"&&this.displayInput=="block"){
      this.displayInput="none";
      this.disableInput="true";
    }else{
      this.displayInput="none";
      this.disableInput="true";
    }
  }

  //attr.disabled options
  // toggleDisabled(): void {
  //   if(this.disableInput=="disabled"&&this.displayInput=="none"){
  //     this.displayInput="block";
  //     this.disableInput="null";
  //   }else if (this.disableInput=="null"&&this.displayInput=="block"){
  //     this.displayInput="none";
  //     this.disableInput="disabled";
  //   }else{
  //     this.displayInput="none";
  //     this.disableInput="disabled";
  //   }
  // }



  // toggleDisabling(){
  //   if(this.display=="none"){
  //     this.display="block";
  //   }else{
  //     this.display="none";
  //   }
  // }
}
