import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { AppService } from '../services.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  loading: boolean = false;
  posts: Post[] = new Array();
  totalResults: any;
  page: number = 1;

  constructor(public http: HttpClient, private service: AppService, private route: Router) { 
    
  }
  
  ngOnInit(): void {
    this.loadPostsFromMyDb()
    
    
  }
  callback = (res: any) => {
    console.log(res);
  }
  
  loadPostsFromMyDb(): void {
    this.loading = true;
    
    this.service.getPosts(this.page).subscribe(res => {
      this.posts = res;      
      console.log(this.posts)
      this.loading = false;
      this.totalResults = this.posts

    })
  }
  nextPage(){
    this.page = this.page + 1;
    this.loadPostsFromMyDb()
  }
    
  previousPage(){
    if(this.page == 0){
      return;
    }else{
      this.page = this.page - 1;
      this.loadPostsFromMyDb()
    }
  }

  

}
