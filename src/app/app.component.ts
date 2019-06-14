import { Component } from '@angular/core';
import { ShareDataService } from './share-data.service';
import { InumModel } from './num-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hw2';
  i = 0;
  num  = this.showValues();

  constructor(public sharedata:ShareDataService){
  }

  showValues(){
    return this.sharedata.num_i;
  }
  

  


}
