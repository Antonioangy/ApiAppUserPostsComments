import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { AppService } from 'src/app/services.service';
import { Comment } from '../../models/comment.model';




@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  posts: Post[] = new Array();
  id!: number
  data: any;
  comments: Comment[] = new Array();
  public commentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private route: ActivatedRoute, private service: AppService, private router: Router) {

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getOne();
    this.loadcommentsforEveryPost();
    this.commentForm = this.formBuilder.group({
      body: [''],
      postId: this.id,
      email: this.service.getUser()['email']
    });
    
  }

  getOne(){
    this.service.getOne(this.id).subscribe(data=>{
      this.data = data;
      console.log(this.data)
    })
  }
  
  loadcommentsforEveryPost(){
    this.http.get<Comment[]>(this.service.localhostComment).subscribe(res => {
      this.comments = res;
    })
  }
  

  addComment() {
    this.http
      .post<any>(this.service.localhostComment, this.commentForm.value,)
      .subscribe(
        (res) => {
          alert('post created successfuly');
          this.commentForm.reset();
          // this.router.navigate(['http://localhost:4200/detail/'+this.id]);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }
  

}
