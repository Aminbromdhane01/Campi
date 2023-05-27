import { Token } from '@angular/compiler';
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email : '' ,
    password : ''
  }



  constructor (private auth : AuthService , private router : Router) {}  

  ngOnInit () : void {}
  token : any

  public login () 
  {
     let fd = new FormData ;
     fd.append('email' , this.user.email);
     fd.append('password' , this.user.password);
     console.log(this.user);
     
     console.log(fd);
     
     this.auth.login(this.user).subscribe(
      res => { 
        this.token = res ;
        localStorage.setItem('token' , this.token.mytoken)
        
        

        
        
        
      this.router.navigate(['/home'])},
      err => alert('password or email invalid')
     )
     
  }
 

}
