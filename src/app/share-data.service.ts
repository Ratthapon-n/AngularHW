import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inum } from './num';



@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  num_i:number = 0;
  constructor(private http:HttpClient) { }

  get_num_i(){
    return this.num_i;
  }
  
  getId(){
    return [{"id":0}];
  }
}
