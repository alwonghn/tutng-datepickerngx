import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabled-input-tester',
  templateUrl: './disabled-input-tester.component.html',
  styleUrls: ['./disabled-input-tester.component.css']
})
export class DisabledInputTesterComponent implements OnInit {

  disableInput:boolean = true;
  displayInput: string = "none";

  constructor() { }

  ngOnInit() {
    this.disableInput=true;
    this.displayInput="none";
  }

  toggleDisabled(): void {
    if(this.disableInput==true&&this.displayInput=="none"){
      this.displayInput="block";
      this.disableInput=false;
    }else if (this.disableInput==false&&this.displayInput=="block"){
      this.displayInput="none";
      this.disableInput=true;
    }else{
      this.displayInput="none";
      this.disableInput=true;
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
