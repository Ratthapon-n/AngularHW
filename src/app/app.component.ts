import { Component } from '@angular/core';
import { ShareDataService } from './share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hw2';
  i_send:number = 0;
  array = ['Name',true]
  
  
  num  = this.showValues();

  constructor(public sharedata:ShareDataService){
  }

  showValues(){
    return this.sharedata.num_i;
  }
  

  


}
