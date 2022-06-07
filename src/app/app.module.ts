import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customers/customer/customer.component'


// https://locahost:4200/customers --- > customers component

const routes:Routes = [
  {path: 'customers',component:CustomersComponent},
  {path: 'customer',component:CustomerComponent}
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
