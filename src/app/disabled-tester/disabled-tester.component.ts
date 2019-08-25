import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disabled-tester',
  templateUrl: './disabled-tester.component.html',
  styleUrls: ['./disabled-tester.component.css']
})
export class DisabledTesterComponent implements OnInit {
  disabled:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggleDisabled(){
    this.disabled=!this.disabled;
  }
}
