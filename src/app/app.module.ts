import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customers/customer/customer.component'



//http://localhost:4200/customers
// https://locahost:4200/customers --- > customers component
//http://localhost:4200/customer/3
//custID is nothing but the param
const routes:Routes = [
  {path: 'customers',component:CustomersComponent,
     children:
      [
        { 
        path: 'customer/:customerID',
        component:CustomerComponent
        }
      ],
  },
  // {path: 'customer',component:CustomerComponent}
  {path: 'customer/:customerID',component:CustomerComponent},
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
