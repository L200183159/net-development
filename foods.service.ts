import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(
    private httpClient : HttpClient
  ){ }
  httpOptions : any 
  url = 'http://localhost:5000/api/foods'

  getDataFoods(){
    return this.httpClient.get(this.url, this.httpOptions)
  }
}
