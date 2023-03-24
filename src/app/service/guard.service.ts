import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(): boolean {
    if(sessionStorage.getItem("jwt") != null){
      return true;
    }else{
      alert("please login, you are not authenticated")
      this.router.navigateByUrl("login");
      return false;
    }
  }
}
