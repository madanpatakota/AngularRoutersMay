import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }
 

  //'3'  3
  getCustomers(){
    let customers = [
      {customerID:1,Name:"Jaimin",Role:"SoftwareEngineer",Place:"Mumbai"},
      {customerID:2,Name:"Krish",Role:"Manager",Place:"Chennai"},
      {customerID:3,Name:"Haritha",Role:"Senior Manager",Place:"Hyderabad"}];
    return customers;
  }

  
}
