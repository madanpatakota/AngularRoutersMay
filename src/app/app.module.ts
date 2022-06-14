import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customers/customer/customer.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { CanActivateGuard } from './can-activate.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { CanDeactivateGuard } from './can-deactivate.guard';



//http://localhost:4200/customers
// https://locahost:4200/customers --- > customers component
//http://localhost:4200/customer/3
//custID is nothing but the param

//customers/customer/:customerID
//'customers/customer'
const routes:Routes = [
  {path:'' , component:LoginComponent},
  {
    path: 'customers',
    component:CustomersComponent, 
    canActivate: [CanActivateGuard],
    canDeactivate:[CanDeactivateGuard],
     children:
      [
        { 
        path: 'customer',
        component:CustomerComponent
        }
      ],
  },
  {path:'not-found' , component:NotfoundComponent , 
   data:["OOPS. this page is not avaible...."]},
  {path: '**', redirectTo:'not-found'}
  
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
