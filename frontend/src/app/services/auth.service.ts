import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { 


    
  }

  private url = 'http://127.0.0.1:3000/user' ;


  register (author : any) 
  {
    return this.http.post(this.url+'/register' , author)
  }
  login (user : any)
  {
    return this.http.post(this.url + '/login' , user)
  }
   /**
   * isLoggedin
   */
  isLoggedin() {

    let token = localStorage.getItem("token")
    if (token)
    {
      return true
    }
    else
    {
      return false
    }
    
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
  getbyId(id :any)
  {
    return this.http.get(this.url+'/getbyid/'+id)
  }
}
