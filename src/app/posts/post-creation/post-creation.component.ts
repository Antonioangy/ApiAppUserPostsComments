import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-post-creation',
  templateUrl: './post-creation.component.html',
  styleUrls: ['./post-creation.component.css']
})
export class PostCreationComponent implements OnInit {
  public newPostForm!: FormGroup;
  service: any;
  
  
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.newPostForm = this.formBuilder.group({
      title: [''],
      body: [''],
    });
    
  }
  
  submitPost() {

    this.http
      .post<any>(environment.localhostPost, this.newPostForm.value)
      .subscribe(
        (res) => {
          alert('post created successfuly');
          this.newPostForm.reset();
          this.router.navigate(['home']);
        },
        (err) => {
          alert('something went wrong');
        }
      );
  }

  
}
