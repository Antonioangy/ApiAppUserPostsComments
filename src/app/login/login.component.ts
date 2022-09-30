import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms"
import { Router } from '@angular/router';
import { User } from '../models/user.models';
import { AppService } from '../services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  private isLogged: boolean = false;
  private username: string = "";
  userLogged: User[] = new Array();

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private service: AppService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  
  
  login(){
    this.service.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(res=>{
      if(res.length == 0){
        alert("user not found");
      }else{
        console.log("login success");
        let user = res[0];
        this.service.setUser(user);
        this.loginForm.reset();
        this.router.navigate(['home']),
        this.service.isLogged.next(true);
        console.log(this.service.isLogged);
      }
    },
    err=>{
      alert('no users found, register first')
    }
    )
  }


}
