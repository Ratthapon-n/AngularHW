import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text3',
  templateUrl: './text3.component.html',
  styleUrls: ['./text3.component.css']
})
export class Text3Component implements OnInit {

  isCollapsed:boolean=true;
  i=0;
  
  constructor() { }

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
