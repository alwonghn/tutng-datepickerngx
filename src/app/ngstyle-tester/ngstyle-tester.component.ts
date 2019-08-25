import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-tester',
  templateUrl: './ngstyle-tester.component.html',
  styleUrls: ['./ngstyle-tester.component.css']
})
export class NgstyleTesterComponent implements OnInit {

  
  display:string="none";
  constructor() { }

  ngOnInit() {
  }
  toggleDisplay(){
    if(this.display=="none"){
      this.display="block";
    }else{
      this.display="none";
    }
  }
}
