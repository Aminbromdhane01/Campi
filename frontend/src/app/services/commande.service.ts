import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { 

    
  }
  private url = 'http://127.0.0.1:4000/commande' ;

  addCommand(article :any)
  {
    return this.http.post(this.url+'/add',article)
  }
}

