import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../share-data.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']

})
export class HeroListComponent implements OnInit {

  @Input() i_send;

  isCollapsed:boolean=true;

  i=0;

  // num :number = this.showValues();
  
  constructor() { }

  

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
  // addnum(){
  //   this.sharedata.addnum_i();
  // }

  // showValues(){
  //   return this.sharedata.num_i;
    
  // }

  ngOnInit() {
  }

}
