import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  id : any
  auth : any
  articles : any
  user : any
  constructor(private act : ActivatedRoute , private _auth:AuthService , private data:ArticleService){}


  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    
    this._auth.getbyId(this.id).subscribe(
      res => { this.auth = res
      console.log(this.auth);
      }
    )
    this.data.getArticleByIdAuthor(this.id).subscribe(
      res => {this.articles =res 
      console.log(this.articles);
      }
    )
   
 this.user = this._auth.getAuthDataFromToken();
      
  }
  
}
