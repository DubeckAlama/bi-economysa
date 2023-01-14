import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
  })
  export class NoAuthGuard implements CanActivate {
    /**
    *
    * @param {Router} router
    */
   constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(localStorage.getItem('token')==null)
        {
            return true
        }

        // session actived
        this.router.navigate(['/dashboard']);
        return false;

    }
  }
