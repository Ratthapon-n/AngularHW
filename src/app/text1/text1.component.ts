import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text1',
  templateUrl: './text1.component.html',
  styleUrls: ['./text1.component.css']
})
export class Text1Component implements OnInit {

  isCollapsed:boolean=true;
  i=0;
  
  constructor() { }

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
  }

}
