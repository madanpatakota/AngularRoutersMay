import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomersComponent } from './customers/customers.component';



export interface canDeactivateCustomersComponent{
  canDeactivate() : boolean;
}



@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CustomersComponent> {
  constructor(private router:Router){
  }

  canDeactivate(component: CustomersComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot,
     nextState?: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    
      let isActive = component.canDeactivate();

      if(isActive){
        this.router.navigate([""]);
        return false;
      }
      else {
        return true;
      }
      
    
    }
}
