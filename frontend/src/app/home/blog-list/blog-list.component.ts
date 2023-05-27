import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  articles : any = []
  date : any = Date.now()
  visible : any =false 

  constructor(private art : ArticleService , public auth : AuthService , private route : Router){

  }
  ngOnInit(): void {
   this.art.getAll().subscribe(
    res => {this.articles  = res
    console.log(this.articles)}
     ,

    err => console.log(err)
    
   )
      
  }
  navigate(id :any)
  {
    this.route.navigate
  }
  

}
