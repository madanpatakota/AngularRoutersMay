import { mergeNsAndName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

     


      
      //username is madan.patakota@gmail.com
      //password is madan
      
      //browser cookie// cookie which is useful for store the client information......
      //localstorage
      //sessionstroage // i can store the information.........

      //1. i have to check the email and password . in case if the useremailid is 
      //madan.patakota@gmail.com pwd : madan then allow the respective component
      //gives the modelpopup says you are not autherized.....
    
      console.log("i am activated . you are trying to reach the customers page");

      let email = localStorage.getItem("userEmail");
      let pwd = localStorage.getItem("userPassword");

      if(email === "madan.patakota@gmail.com" && pwd === "madan"){
        return true;
      }
      else{
        //route.
        window.alert("Access denied..Please check with another email");
        
        return false;
      }


  }
  
}
