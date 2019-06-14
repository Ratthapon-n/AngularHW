import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  isCollapsed:boolean=true;

  i=0;

  num = this.sharedata.num_i;
  
  constructor(public sharedata:ShareDataService) { }

  

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
  addnum(){
    this.sharedata.num_i = num + 1;
  }

  showValues(){
    return this.sharedata.num_i;
    
  }

  ngOnInit() {
  }

}
