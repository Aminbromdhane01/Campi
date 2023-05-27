import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = 
  {
    name : '' ,
    lastname : '' ,
    email : '' ,
    password : '',
    about : '',
    image : ''

  }

 // image : any

  //public select (e :any)
  //{
    //this.image = e.target.files[0] ;
  //}



  constructor(private auth : AuthService , private router : Router) {}

  ngOnInit(): void {
      
  }
  token : any
  public register() {
    
    
    let fd = new FormData 
    fd.append('name' ,this.user.name)
    fd.append('lastname' , this.user.lastname)
    fd.append('email',this.user.email)
    fd.append('password' , this.user.password)
    fd.append('about' , this.user.about) 
    
    console.log(fd);
    
    

    this.auth.register(this.user).subscribe(
      res => {
        
        
        this.router.navigate(['/login'])}

    )
  }

}
