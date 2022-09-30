import { Injectable, Input } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './services.service';

@Injectable({ providedIn: 'root' })
export class HomeGuard implements CanActivate {

  
  constructor(private service: AppService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // return this.service.isLogged == true

    if(this.service.isLogged.getValue() == true){
      return true;
    } else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
