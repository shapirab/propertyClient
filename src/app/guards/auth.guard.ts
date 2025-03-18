import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isUser = false;
      this.loginService.currentUser$.subscribe({
        next: res => res !== null ? isUser = true : isUser = false
      });
    if(isUser){
      return true;
    }
    this.router.navigateByUrl('/unauthorized');
    return false;
  }

}
