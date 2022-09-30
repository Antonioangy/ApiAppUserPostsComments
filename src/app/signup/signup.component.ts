import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomValidators } from '../providers/customValidators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  service: any;
  submitted = false;
  signupForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.minLength(8)
]),
      passwordConfirmed: new FormControl('', [Validators.required])
    },

    CustomValidators.mustMatch('password', 'passwordConfirmed') // insert here
  );
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    
  }
  

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else{
      this.http
          .post<any>(environment.localhostUser, this.signupForm.value)
          .subscribe(
            (res) => {
              alert('signup successfull');
              this.signupForm.reset();
              this.router.navigate(['home']);
            },
            (err) => {
              alert('something went wrong');
            }
          );
    }

    
  }
  
}
