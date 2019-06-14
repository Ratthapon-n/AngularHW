import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  num_i:number = 0;
  constructor() { }

  get_num_i():number{
    return this.num_i;
  }

}
