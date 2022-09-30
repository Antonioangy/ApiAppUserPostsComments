import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './home.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostCreationComponent } from './posts/post-creation/post-creation.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [HomeGuard]},
  {path: 'postCreation', component: PostCreationComponent, canActivate: [HomeGuard]},
  {path: 'detail/:id', component:PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
