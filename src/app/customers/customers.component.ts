import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customersService:CustomersService) { }

  customers:any= null;
  ngOnInit(): void {
      this.customers = this.customersService.getCustomers();
  }

}
