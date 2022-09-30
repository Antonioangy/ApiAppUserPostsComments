import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Post } from './models/post.model';
import { User } from './models/user.models';

@Injectable({
    providedIn: 'root'
})
export class AppService{

    public isLogged = new BehaviorSubject(false);
    public user: any | undefined;
    id!: number;
    localhostPost: string = "http://localhost:3000/posts";
    localhostUser: string = "http://localhost:3000/signupUser";
    localhostComment: string = 'http://localhost:3000/comments';


    constructor(public http: HttpClient, private route: ActivatedRoute,){}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id']
        this.getOne(this.getPosts[this.id]);
    
      }
    getOne(id: number){
        return this.http.get(this.localhostPost+"/"+id).pipe((res: any) =>{
            return res;
        })
    }
    setUser(userLogged: User){
        
        this.user = userLogged;
        console.log(this.user);
    } 
    getUser(){
       return this.user;
    }

    getPosts(page: number, limit:number=10){
       return this.http.get<Post[]>(this.localhostPost+'?_page='+page+"&_limit="+limit)
        
    }

    login(username: string, password: string){
        return this.http.get<User[]>(this.localhostUser+"?username="+username+"&password="+password)
    }
}