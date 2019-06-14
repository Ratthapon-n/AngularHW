import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  num_i:number = 0;
  constructor() { }

  
  addnum_i(){
    this.num_i = this.num_i+1;
  }

}
