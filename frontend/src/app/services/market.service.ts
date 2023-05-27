import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private http : HttpClient) { 



  }
  private url = 'http://127.0.0.1:7000/api' ;

  getAll()
  {
    return this.http.get(this.url+'/mydata')
  }
  getAuthDataFromToken()
  {
    let token =localStorage.getItem("token")
    if (token)
    {
      let data = JSON.parse(window.atob(token.split('.')[1]));
      
      
      return data
      
      
    }
  }

}
