import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text2',
  templateUrl: './text2.component.html',
  styleUrls: ['./text2.component.css']
})
export class Text2Component implements OnInit {

  isCollapsed:boolean=true;
  i=0;
  
  constructor() { }

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
