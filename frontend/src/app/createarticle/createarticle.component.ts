import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  article : any = {
    title :'',
    content :'',
    tags : [] ,
    description :'',
    idUser: '' ,
    AuName : ''
    
  }
  
  tag : any = ''
 // public select (e :any)
  //{
    //this.image = e.target.files[0] ;
  //}

  constructor(private auth : AuthService , private c_article : ArticleService , private router : Router ){}
  ngOnInit(): void {
    console.log(this.auth.getAuthDataFromToken());
    
   
    
    
    
      
  }
  create()
  {
    console.log(this.article);
    let fd = new FormData ;
    fd.append('title' , this.article.title)
    fd.append('content' , this.article.content)
    
    fd.append('tags' , this.article.tags.toString())
    fd.append('description', this.article.description)
    console.log(this.auth.getAuthDataFromToken().id);
    fd.append('idUser' , this.auth.getAuthDataFromToken().id)
    fd.append('AuName' , this.auth.getAuthDataFromToken().fullname)
    console.log(fd);
    this.article.idUser = this.auth.getAuthDataFromToken().id;
    this.article.AuName = this.auth.getAuthDataFromToken().fullname;
    
    

    this.c_article.create(this.article).subscribe(
      res => this.router.navigate(['/home']),
      err => console.log(err)
      
    )

    
  }

}
